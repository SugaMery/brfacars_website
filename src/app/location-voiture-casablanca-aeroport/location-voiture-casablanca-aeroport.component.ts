import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-casablanca-aeroport',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-casablanca-aeroport.component.html',
  styleUrl: './location-voiture-casablanca-aeroport.component.css'
})
export class LocationVoitureCasablancaAeroportComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Casablanca Aéroport : Confort et Flexibilité');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture à l\'aéroport de Casablanca avec BrfaCars. Choisissez parmi une large gamme de véhicules à des prix compétitifs et profitez d\'un service rapide et fiable.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location voiture Casablanca aéroport, louer voiture Casablanca aéroport, location voiture Maroc aéroport',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à Casablanca Aéroport : Confort et Flexibilité',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture à l\'aéroport de Casablanca avec BrfaCars. Choisissez parmi une large gamme de véhicules à des prix compétitifs et profitez d\'un service rapide et fiable.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-casablanca-aeroport.webp',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-voiture-casablanca-aeroport',
    });
  }
  
}
