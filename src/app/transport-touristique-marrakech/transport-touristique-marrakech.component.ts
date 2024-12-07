import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-transport-touristique-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './transport-touristique-marrakech.component.html',
  styleUrl: './transport-touristique-marrakech.component.css'
})
export class TransportTouristiqueMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Transport Touristique à Marrakech - Explorez la Ville avec Confort');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez les meilleures options de transport touristique à Marrakech. Explorez la ville en toute simplicité avec nos services de transport privés et en groupe.' },
      { name: 'keywords', content: 'transport touristique Marrakech, taxi Marrakech, transport privé Marrakech, visites guidées Marrakech, transport aéroport Marrakech' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Transport Touristique à Marrakech - Explorez la Ville avec Confort' },
      { property: 'og:description', content: 'Découvrez les meilleures options de transport touristique à Marrakech. Explorez la ville en toute simplicité avec nos services de transport privés et en groupe.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/transport-marrakech.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/transport-touristique-marrakech' }
    ]);
  }
}
