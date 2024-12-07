import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-marrakech.component.html',
  styleUrl: './location-marrakech.component.css'
})
export class LocationMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Marrakech : Louez une voiture pour explorer la ville');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture à Marrakech avec BrfaCars et explorez cette ville mythique du Maroc. Profitez de véhicules modernes à des prix compétitifs et vivez une expérience de voyage unique.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location de voiture Marrakech, louer une voiture Marrakech, location auto Marrakech, voitures de location Marrakech, location véhicule Marrakech',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à Marrakech : Louez une voiture pour explorer la ville',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture à Marrakech avec BrfaCars et explorez cette ville mythique du Maroc. Profitez de véhicules modernes à des prix compétitifs et vivez une expérience de voyage unique.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-marrakech.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-marrakech',
    });
  }
  
}
