import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-maroc-com',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './maroc-com.component.html',
  styleUrl: './maroc-com.component.css'
})
export class MarocComComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture au Maroc - BrfaCars');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez le Maroc à votre rythme en louant une voiture avec BrfaCars. Profitez de tarifs compétitifs et d’un service de qualité pour explorer les villes du Maroc.' },
      { name: 'keywords', content: 'location de voiture Maroc, location voiture pas cher Maroc, louer une voiture au Maroc, voiture à louer Maroc' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voiture au Maroc - BrfaCars' },
      { property: 'og:description', content: 'Découvrez le Maroc à votre rythme en louant une voiture avec BrfaCars. Profitez de tarifs compétitifs et d’un service de qualité pour explorer les villes du Maroc.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-maroc.webp' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-voiture-maroc' }
    ]);
  }
}
