import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-agadir-pas-cher',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-agadir-pas-cher.component.html',
  styleUrl: './location-voiture-agadir-pas-cher.component.css'
})
export class LocationVoitureAgadirPasCherComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture Agadir Pas Cher : Explorez la ville à petit prix');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Louez une voiture pas cher à Agadir avec BrfaCars. Découvrez Agadir à prix compétitifs et profitez d’un service de qualité pour vos déplacements.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location voiture Agadir pas cher, voiture pas chère Agadir, louer une voiture pas cher Agadir, location économique Agadir',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture Agadir Pas Cher : Explorez la ville à petit prix',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Louez une voiture pas cher à Agadir avec BrfaCars. Découvrez Agadir à prix compétitifs et profitez d’un service de qualité pour vos déplacements.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-agadir-pas-cher.png',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-voiture-agadir-pas-cher',
    });
  }
  
}
