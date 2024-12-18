import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-ouarzazate',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-ouarzazate.component.html',
  styleUrl: './location-voiture-ouarzazate.component.css'
})
export class LocationVoitureOuarzazateComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Ouarzazate - BrfaCars');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture à Ouarzazate avec BrfaCars pour explorer cette magnifique région du Maroc. Profitez de nos tarifs compétitifs et de notre service de qualité.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location voiture Ouarzazate, louer voiture Ouarzazate, voiture pas cher Ouarzazate, location voiture Maroc',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à Ouarzazate - BrfaCars',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture à Ouarzazate avec BrfaCars pour explorer cette magnifique région du Maroc. Profitez de nos tarifs compétitifs et de notre service de qualité.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-ouarzazate.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-voiture-ouarzazate',
    });
  }
  
}
