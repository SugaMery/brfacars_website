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
    this.titleService.setTitle('Location de Voiture : Découvrez Nos Offres et Réservez Votre Véhicule');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Réservez votre voiture en ligne avec BrfaCars pour découvrir la ville à votre rythme. Des véhicules modernes, confortables et à prix compétitifs vous attendent.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location auto, location de voiture, voitures de location, location véhicule',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture : Découvrez Nos Offres et Réservez Votre Véhicule',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Réservez votre voiture en ligne avec BrfaCars pour découvrir la ville à votre rythme. Des véhicules modernes, confortables et à prix compétitifs vous attendent.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-auto.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-auto',
    });
  }
  
}
