import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-morocco-excursions',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './morocco-excursions.component.html',
  styleUrl: './morocco-excursions.component.css'
})
export class MoroccoExcursionsComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Excursions au Maroc - Explorez les Plus Beaux Sites');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Explorez les meilleures excursions au Maroc avec BrfaCars. Découvrez les paysages époustouflants du désert, les montagnes de l’Atlas et les villes impériales à travers des circuits sur mesure.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'excursions au Maroc, circuits touristiques, excursions désert Maroc, excursions Marrakech, visite guidée Maroc',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Excursions au Maroc - Explorez les Plus Beaux Sites',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Explorez les meilleures excursions au Maroc avec BrfaCars. Découvrez les paysages époustouflants du désert, les montagnes de l’Atlas et les villes impériales à travers des circuits sur mesure.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/morocco-excursions.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/morocco-excursions',
    });
  }
  
}
