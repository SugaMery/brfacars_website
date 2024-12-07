import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-essaouira',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-essaouira.component.html',
  styleUrl: './location-voiture-essaouira.component.css'
})
export class LocationVoitureEssaouiraComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Essaouira : Explorez la Ville en Liberté');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Louez une voiture à Essaouira et explorez la ville et ses environs à votre rythme. Des prix compétitifs, un service rapide et des véhicules de qualité sont disponibles.' },
      { name: 'keywords', content: 'location voiture Essaouira, louer voiture Essaouira, voiture de location Essaouira, location voiture Maroc' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voiture à Essaouira : Explorez la Ville en Liberté' },
      { property: 'og:description', content: 'Louez une voiture à Essaouira et explorez la ville et ses environs à votre rythme. Des prix compétitifs, un service rapide et des véhicules de qualité sont disponibles.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-essaouira.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-voiture-essaouira' }
    ]);
  }
}
