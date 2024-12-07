import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-auto',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-auto.component.html',
  styleUrl: './location-auto.component.css'
})
export class LocationAutoComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location Auto au Maroc - Louez Facilement Votre Véhicule');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Explorez notre large sélection de voitures à louer avec BrfaCars. Réservez facilement et profitez de véhicules modernes pour tous vos déplacements au Maroc.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location auto, location de voiture Maroc, voitures à louer, location de véhicules modernes',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location Auto au Maroc - Louez Facilement Votre Véhicule',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Explorez notre large sélection de voitures à louer avec BrfaCars. Réservez facilement et profitez de véhicules modernes pour tous vos déplacements au Maroc.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-auto-maroc.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/location-auto',
    });
  }
  
  
  
}
