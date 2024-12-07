import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-de-voiture-essaouira',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-de-voiture-essaouira.component.html',
  styleUrl: './location-de-voiture-essaouira.component.css'
})
export class LocationDeVoitureEssaouiraComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Essaouira : Réservez votre véhicule en ligne');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Louez une voiture à Essaouira avec BrfaCars. Profitez de tarifs compétitifs et explorez cette ville historique à votre rythme. Réservez votre véhicule dès maintenant.' },
      { name: 'keywords', content: 'location de voiture Essaouira, location auto Essaouira, voitures de location Essaouira, louer une voiture à Essaouira, location véhicule Essaouira' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voiture à Essaouira : Réservez votre véhicule en ligne' },
      { property: 'og:description', content: 'Louez une voiture à Essaouira avec BrfaCars. Profitez de tarifs compétitifs et explorez cette ville historique à votre rythme. Réservez votre véhicule dès maintenant.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-de-voiture-essaouira.jpeg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-de-voiture-essaouira' }
    ]);
  }
}
