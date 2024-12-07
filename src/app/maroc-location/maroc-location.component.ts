import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-maroc-location',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './maroc-location.component.html',
  styleUrl: './maroc-location.component.css'
})
export class MarocLocationComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture au Maroc - BrfaCars');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Réservez une voiture en location au Maroc avec BrfaCars. Profitez des meilleures offres pour explorer les magnifiques villes du Maroc et ses paysages spectaculaires.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location voiture Maroc, location voiture au Maroc, louer voiture Maroc, voiture à louer Maroc',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture au Maroc - BrfaCars',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Réservez une voiture en location au Maroc avec BrfaCars. Profitez des meilleures offres pour explorer les magnifiques villes du Maroc et ses paysages spectaculaires.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-maroc.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/location-maroc',
    });
  }
  
}
