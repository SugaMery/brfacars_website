import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-a-casablanca',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-a-casablanca.component.html',
  styleUrl: './location-voiture-a-casablanca.component.css'
})
export class LocationVoitureACasablancaComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Casablanca : Explorez la Ville et ses Environs');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture à Casablanca avec BrfaCars et explorez cette ville dynamique du Maroc. Profitez de véhicules modernes à des prix compétitifs et vivez une expérience unique.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location de voiture Casablanca, louer une voiture Casablanca, location auto Casablanca, voitures de location Casablanca, location véhicule Casablanca',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à Casablanca : Explorez la Ville et ses Environs',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture à Casablanca avec BrfaCars et explorez cette ville dynamique du Maroc. Profitez de véhicules modernes à des prix compétitifs et vivez une expérience unique.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-casablanca.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-voiture-casablanca',
    });
  }
  
}
