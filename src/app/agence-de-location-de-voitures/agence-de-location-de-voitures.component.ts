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
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voitures à Agadir : Trouvez votre Voiture Idéale avec BrfaCars');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez les meilleures offres de location de voitures à Agadir avec BrfaCars. Choisissez parmi une large gamme de véhicules pour tous vos besoins.' },
      { name: 'keywords', content: 'location de voitures Agadir, agence de location de voitures Agadir, louer voiture Agadir, voiture pas cher Agadir' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Location de Voitures à Agadir : Trouvez votre Voiture Idéale avec BrfaCars' },
      { property: 'og:description', content: 'Découvrez les meilleures offres de location de voitures à Agadir avec BrfaCars. Choisissez parmi une large gamme de véhicules pour tous vos besoins.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/location-voitures.jpeg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/agence-de-location-de-voitures' }
    ]);
  }
}
