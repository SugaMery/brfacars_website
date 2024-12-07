import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-marrakech.component.html',
  styleUrl: './location-voiture-marrakech.component.css'
})
export class LocationVoitureMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Marrakech : Explorez la Ville Rouge à Votre Rythme');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture à Marrakech pour découvrir la Ville Rouge à votre rythme. Profitez de nos prix compétitifs et de notre large choix de véhicules.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location voiture Marrakech, louer voiture Marrakech, voiture de location Marrakech, location voiture pas cher Marrakech',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à Marrakech : Explorez la Ville Rouge à Votre Rythme',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture à Marrakech pour découvrir la Ville Rouge à votre rythme. Profitez de nos prix compétitifs et de notre large choix de véhicules.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-marrakech.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-voiture-marrakech',
    });
  }
  
}
