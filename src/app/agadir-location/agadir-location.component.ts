import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-agadir-location',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './agadir-location.component.html',
  styleUrl: './agadir-location.component.css'
})
export class AgadirLocationComponent {
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à Agadir : Louez une Voiture avec BrfaCars');
  }

  public setMetaTags(): void {
    this.meta.updateTag({
      name: 'description',
      content: "Louez une voiture à Agadir avec BrfaCars. Profitez d'une large sélection de véhicules à des prix compétitifs et explorez Agadir et ses alentours à votre rythme.",
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'location de voiture Agadir, louer voiture Agadir, BrfaCars location, Agadir location, voiture de location Agadir',
    });
    this.meta.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Location de Voiture à Agadir : Louez une Voiture avec BrfaCars',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: "Découvrez les meilleures offres de location de voiture à Agadir avec BrfaCars. Louez facilement une voiture et explorez Agadir et ses environs.",
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-agadir.png',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/agadir-location',
    });
  }
  
}
