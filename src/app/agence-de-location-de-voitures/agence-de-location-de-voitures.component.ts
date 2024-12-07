import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-agence-de-location-de-voitures',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './agence-de-location-de-voitures.component.html',
  styleUrl: './agence-de-location-de-voitures.component.css'
})
export class AgenceDeLocationDeVoituresComponent {
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voitures à Agadir : Trouvez votre Voiture Idéale avec BrfaCars');
  }
  public setMetaTags(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Découvrez les meilleures offres de location de voitures à Agadir avec BrfaCars. Choisissez parmi une large gamme de véhicules pour tous vos besoins.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'location de voitures Agadir, agence de location de voitures Agadir, louer voiture Agadir, voiture pas cher Agadir',
    });
    this.meta.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Location de Voitures à Agadir : Trouvez votre Voiture Idéale avec BrfaCars',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Découvrez les meilleures offres de location de voitures à Agadir avec BrfaCars. Choisissez parmi une large gamme de véhicules pour tous vos besoins.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-voitures.jpeg',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/agence-de-location-de-voitures',
    });
  }
  
}
