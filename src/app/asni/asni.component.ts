import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-asni',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './asni.component.html',
  styleUrl: './asni.component.css'
})
export class AsniComponent {
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Découvrir Asni : Explorez la Perle du Haut Atlas');
  }

  public setMetaTags(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Découvrez la ville d\'Asni, un joyau caché du Haut Atlas, idéal pour les amoureux de la nature et les aventuriers. Explorez les montagnes, les vallées et la culture berbère.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Asni, Asni Haut Atlas, excursion Asni, culture berbère, voyage Asni, nature Haut Atlas',
    });
    this.meta.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Découvrir Asni : Explorez la Perle du Haut Atlas',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Découvrez la ville d\'Asni, un joyau caché du Haut Atlas, idéal pour les amoureux de la nature et les aventuriers. Explorez les montagnes, les vallées et la culture berbère.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/asni.jpg',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/asni',
    });
  }
  
}
