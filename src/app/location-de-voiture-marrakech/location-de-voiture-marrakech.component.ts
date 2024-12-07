import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-location-de-voiture-marrakech',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-de-voiture-marrakech.component.html',
  styleUrl: './location-de-voiture-marrakech.component.css'
})
export class LocationDeVoitureMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Marrakech - BrfaCars'
);
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Location de voiture à Marrakech avec BrfaCars. Louez une voiture facilement et explorez Marrakech avec des tarifs attractifs et un service professionnel.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location de voiture à Marrakech, louer voiture Marrakech, location voiture pas cher Marrakech, Marrakech voiture',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Balises Open Graph
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à Marrakech - BrfaCars',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Location de voiture à Marrakech avec BrfaCars. Louez une voiture facilement et explorez Marrakech avec des tarifs attractifs et un service professionnel.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-marrakech.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/location-voiture-marrakech',
    });
  }
  
  
}
