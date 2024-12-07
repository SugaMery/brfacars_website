import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-aeroport-maroc',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './aeroport-maroc.component.html',
  styleUrl: './aeroport-maroc.component.css'
})
export class AeroportMarocComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Aéroports au Maroc : Découvrez les Meilleurs Aéroports du Royaume | BrfaCars Blog');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez les meilleurs aéroports au Maroc pour votre voyage. BrfaCars vous guide à travers les aéroports les plus populaires, y compris les services de location de voiture.' },
      { name: 'keywords', content: 'aéroport Maroc, aéroports au Maroc, location voiture Maroc, voyage Maroc, BrfaCars blog, aéroport international Maroc' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Aéroports au Maroc : Découvrez les Meilleurs Aéroports du Royaume | BrfaCars Blog' },
      { property: 'og:description', content: 'Découvrez les aéroports majeurs du Maroc et comment BrfaCars vous aide à louer une voiture facilement à l\'arrivée.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/aeroport-maroc.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/aeroport-maroc' }
    ]);
  }
}
