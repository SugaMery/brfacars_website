import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'brfacars-website';


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScriptsSequentially([
        'assets/js/jquery-3.7.1.min.js',
        'assets/js/jquery-ui.js',
        'assets/js/bootstrap.min.js',
        'assets/js/validator.min.js',
        'assets/js/jquery.slicknav.js',
        'assets/js/swiper-bundle.min.js',
      ]);
    }
  }

  private loadScriptsSequentially(scriptUrls: string[]): void {
    scriptUrls
      .reduce((promise, url) => {
        return promise.then(() => this.loadScript(url));
      }, Promise.resolve())
      .then(() => {
        console.log('All scripts loaded sequentially');
      });
  }

  private loadScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = false; // Ensure scripts load in order
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
      document.body.appendChild(script);
    });
  }
}
