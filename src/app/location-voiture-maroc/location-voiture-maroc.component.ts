import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-maroc',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-maroc.component.html',
  styleUrl: './location-voiture-maroc.component.css'
})
export class LocationVoitureMarocComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture au Maroc : Explorez le Royaume à Votre Rythme');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Louez une voiture au Maroc pour découvrir ses villes fascinantes, ses paysages incroyables et ses plages. Découvrez nos prix compétitifs et notre large choix de véhicules.' },
      { name: 'keywords', content: 'location voiture Maroc, louer voiture Maroc, voiture de location Maroc, location voiture Marrakech, location voiture Casablanca' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voiture au Maroc : Explorez le Royaume à Votre Rythme' },
      { property: 'og:description', content: 'Louez une voiture au Maroc pour découvrir ses villes fascinantes, ses paysages incroyables et ses plages. Découvrez nos prix compétitifs et notre large choix de véhicules.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-maroc.webp' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-voiture-maroc' }
    ]);
  }
}
