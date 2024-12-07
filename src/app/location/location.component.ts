import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Véhicules et Excursions : Découvrez Nos Offres');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez nos offres de location de véhicules et d\'excursions à travers le Maroc. Explorez les meilleures destinations et réservez vos aventures facilement.' },
      { name: 'keywords', content: 'location de voiture, location Maroc, excursions Maroc, location de véhicules, voyage au Maroc' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Véhicules et Excursions : Découvrez Nos Offres' },
      { property: 'og:description', content: 'Découvrez nos offres de location de véhicules et d\'excursions à travers le Maroc. Explorez les meilleures destinations et réservez vos aventures facilement.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-voiture.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location' }
    ]);
  }
}
