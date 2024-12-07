import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-aeroport-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './aeroport-marrakech.component.html',
  styleUrl: './aeroport-marrakech.component.css'
})
export class AeroportMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Aéroport Marrakech-Menara : Votre Guide Complet pour Voyager à Marrakech | BrfaCars Blog');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez tout ce que vous devez savoir sur l\'Aéroport Marrakech-Menara, l\'une des principales portes d\'entrée au Maroc. Réservez une voiture avec BrfaCars pour explorer Marrakech à votre rythme.' },
      { name: 'keywords', content: 'aéroport Marrakech, Aéroport Marrakech-Menara, location voiture Marrakech, voyage Marrakech, BrfaCars blog, aéroport international Marrakech' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Aéroport Marrakech-Menara : Votre Guide Complet pour Voyager à Marrakech | BrfaCars Blog' },
      { property: 'og:description', content: 'Découvrez l\'Aéroport Marrakech-Menara, sa localisation, ses services, et comment réserver facilement une voiture à l\'arrivée pour visiter la ville et ses environs.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/aeroport-marrakech.jpeg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/aeroport-marrakech' }
    ]);
  }
}