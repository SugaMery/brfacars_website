import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-de-voiture-agadir',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-de-voiture-agadir.component.html',
  styleUrl: './location-de-voiture-agadir.component.css'
})
export class LocationDeVoitureAgadirComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Agadir : Réservez votre véhicule en ligne');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Louez une voiture à Agadir avec BrfaCars. Profitez de tarifs compétitifs et découvrez la ville à votre rythme. Réservez votre véhicule dès maintenant.' },
      { name: 'keywords', content: 'location de voiture Agadir, location auto Agadir, voitures de location Agadir, louer une voiture à Agadir, location véhicule Agadir' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voiture à Agadir : Réservez votre véhicule en ligne' },
      { property: 'og:description', content: 'Louez une voiture à Agadir avec BrfaCars. Profitez de tarifs compétitifs et découvrez la ville à votre rythme. Réservez votre véhicule dès maintenant.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-de-voiture-agadir.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-de-voiture-agadir' }
    ]);
  }
}
