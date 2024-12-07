import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-essaouira',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-essaouira.component.html',
  styleUrl: './location-essaouira.component.css'
})
export class LocationEssaouiraComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Essaouira : Louez une voiture en ligne');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture à Essaouira avec BrfaCars pour explorer cette magnifique ville historique du Maroc. Profitez de véhicules modernes à des prix compétitifs.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location de voiture Essaouira, louer une voiture Essaouira, location auto Essaouira, voitures de location Essaouira, location véhicule Essaouira',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à Essaouira : Louez une voiture en ligne',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture à Essaouira avec BrfaCars pour explorer cette magnifique ville historique du Maroc. Profitez de véhicules modernes à des prix compétitifs.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-essaouira.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-essaouira',
    });
  }
  
}
