import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-de-voiture-maroc',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-de-voiture-maroc.component.html',
  styleUrl: './location-de-voiture-maroc.component.css'
})
export class LocationDeVoitureMarocComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture au Maroc : Louez une voiture en ligne');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez le Maroc à votre rythme en louant une voiture avec BrfaCars. Explorez les villes, les plages, et les montagnes avec nos véhicules de location abordables et modernes.' },
      { name: 'keywords', content: 'location de voiture Maroc, louer une voiture Maroc, location auto Maroc, voitures de location Maroc, location véhicule Maroc' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voiture au Maroc : Louez une voiture en ligne' },
      { property: 'og:description', content: 'Découvrez le Maroc à votre rythme en louant une voiture avec BrfaCars. Explorez les villes, les plages, et les montagnes avec nos véhicules de location abordables et modernes.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-de-voiture-maroc.jpeg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-de-voiture-maroc' }
    ]);
  }
}
