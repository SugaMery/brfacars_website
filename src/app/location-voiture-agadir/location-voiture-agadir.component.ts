import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-location-voiture-agadir',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './location-voiture-agadir.component.html',
  styleUrl: './location-voiture-agadir.component.css'
})
export class LocationVoitureAgadirComponent {
  
  constructor(private titleService: Title, private metaService: Meta) {}
  
  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Agadir : Découvrez la ville à votre rythme');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Louez une voiture à Agadir avec BrfaCars. Profitez de véhicules modernes à des prix compétitifs et explorez la ville et ses alentours en toute liberté.' },
      { name: 'keywords', content: 'location voiture Agadir, voiture à louer Agadir, louer une voiture Agadir, véhicule à Agadir' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voiture à Agadir : Découvrez la ville à votre rythme' },
      { property: 'og:description', content: 'Louez une voiture à Agadir avec BrfaCars. Profitez de véhicules modernes à des prix compétitifs et explorez la ville et ses alentours en toute liberté.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-agadir.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/location-voiture-agadir' }
    ]);}
}