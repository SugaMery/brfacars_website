import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-aeroport-agadir',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './aeroport-agadir.component.html',
  styleUrl: './aeroport-agadir.component.css'
})
export class AeroportAgadirComponent {
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture à l\'Aéroport d\'Agadir | BrfaCars');
  }

  public setMetaTags(): void {
    this.meta.updateTag({
      name: 'description',
      content: "Réservez votre voiture de location à l'aéroport d'Agadir avec BrfaCars. Offres transparentes, véhicules variés, assistance 24/7 et kilométrage illimité.",
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'location voiture aéroport Agadir, louer voiture Agadir, BrfaCars, voiture aéroport Maroc, réservation voiture Agadir',
    });
    this.meta.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.meta.updateTag({
      property: 'og:title',
      content: "Location de Voiture à l'Aéroport d'Agadir | BrfaCars",
    });
    this.meta.updateTag({
      property: 'og:description',
      content: "Réservez dès maintenant votre voiture de location avec BrfaCars à l'aéroport d'Agadir et partez à la découverte du Maroc en toute liberté.",
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/agadir-airport.jpg',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/agadir-airport',
    });
  
    // Twitter Card Tags
    this.meta.updateTag({
      name: 'twitter:title',
      content: "Location de Voiture à l'Aéroport d'Agadir | BrfaCars",
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: "Réservez dès maintenant votre voiture de location avec BrfaCars à l'aéroport d'Agadir et partez à la découverte du Maroc en toute liberté.",
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.brfacars.com/assets/images/agadir-airport.jpg',
    });
  
    // Additional Tags
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.updateTag({ httpEquiv: 'x-ua-compatible', content: 'ie=edge' });
  }
  
}
