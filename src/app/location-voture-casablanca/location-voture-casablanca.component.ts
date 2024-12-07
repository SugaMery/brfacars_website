import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voture-casablanca',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voture-casablanca.component.html',
  styleUrl: './location-voture-casablanca.component.css'
})
export class LocationVotureCasablancaComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Casablanca - BrfaCars');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Louez une voiture à Casablanca avec BrfaCars et explorez la capitale économique du Maroc. Profitez de nos tarifs compétitifs et d’un service de qualité.' },
      { name: 'keywords', content: 'location voiture Casablanca, louer voiture Casablanca, voiture pas cher Casablanca, location voiture Maroc' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voiture à Casablanca - BrfaCars' },
      { property: 'og:description', content: 'Louez une voiture à Casablanca avec BrfaCars et explorez la capitale économique du Maroc. Profitez de nos tarifs compétitifs et d’un service de qualité.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-casablanca.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-voiture-casablanca' }
    ]);
  }
}
