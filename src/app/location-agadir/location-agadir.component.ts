import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-agadir',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-agadir.component.html',
  styleUrl: './location-agadir.component.css'
})
export class LocationAgadirComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Véhicules à Agadir : Explorez la Ville et ses Environs');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Réservez votre véhicule à Agadir et explorez les merveilles de cette ville balnéaire et ses alentours. Profitez de tarifs compétitifs et d\'un service de qualité.' },
      { name: 'keywords', content: 'location Agadir, location de voiture Agadir, excursions Agadir, location véhicule Maroc' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Véhicules à Agadir : Explorez la Ville et ses Environs' },
      { property: 'og:description', content: 'Réservez votre véhicule à Agadir et explorez les merveilles de cette ville balnéaire et ses alentours. Profitez de tarifs compétitifs et d\'un service de qualité.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/agadir-location.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-agadir' }
    ]);
  }
}
