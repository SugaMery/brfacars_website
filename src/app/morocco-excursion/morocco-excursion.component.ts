import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-morocco-excursion',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './morocco-excursion.component.html',
  styleUrl: './morocco-excursion.component.css'
})
export class MoroccoExcursionComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Excursions au Maroc - Explorez les Meilleurs Sites Touristiques');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Découvrez les meilleures excursions au Maroc avec BrfaCars. Explorez le désert, les montagnes de l’Atlas, et les villes impériales avec des visites guidées personnalisées.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'excursions au Maroc, visites guidées Maroc, circuits touristiques Maroc, excursions désert Maroc',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Excursions au Maroc - Explorez les Meilleurs Sites Touristiques',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Découvrez les meilleures excursions au Maroc avec BrfaCars. Explorez le désert, les montagnes de l’Atlas, et les villes impériales avec des visites guidées personnalisées.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/morocco-excursion.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/morocco-excursion',
    });
  }
  
}
