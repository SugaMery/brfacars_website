import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-marrakech-pas-cher',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-marrakech-pas-cher.component.html',
  styleUrl: './location-voiture-marrakech-pas-cher.component.css'
})
export class LocationVoitureMarrakechPasCherComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture Pas Cher à Marrakech - BrfaCars');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture pas chère à Marrakech avec BrfaCars. Profitez de nos tarifs avantageux et d’une large gamme de véhicules pour explorer la ville et ses alentours.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location voiture pas cher Marrakech, location voiture Marrakech économique, voiture pas cher Marrakech, louer voiture pas cher à Marrakech',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture Pas Cher à Marrakech - BrfaCars',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture pas chère à Marrakech avec BrfaCars. Profitez de nos tarifs avantageux et d’une large gamme de véhicules pour explorer la ville et ses alentours.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-marrakech-pas-cher.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-voiture-marrakech-pas-cher',
    });
  }
  
}
