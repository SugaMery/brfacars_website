import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-aeroport-casablanca',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-aeroport-casablanca.component.html',
  styleUrl: './location-voiture-aeroport-casablanca.component.css'
})
export class LocationVoitureAeroportCasablancaComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à l\'Aéroport de Casablanca : Commodité et Flexibilité');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture à l\'aéroport de Casablanca avec BrfaCars. Profitez de véhicules modernes à des prix compétitifs et récupérez votre voiture directement à l\'aéroport.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location voiture aéroport Casablanca, location auto aéroport Casablanca, voiture à louer aéroport Casablanca, location véhicule aéroport Casablanca',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à l\'Aéroport de Casablanca : Commodité et Flexibilité',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture à l\'aéroport de Casablanca avec BrfaCars. Profitez de véhicules modernes à des prix compétitifs et récupérez votre voiture directement à l\'aéroport.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-aeroport-casablanca.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-voiture-aeroport-casablanca',
    });
  }
  
}
