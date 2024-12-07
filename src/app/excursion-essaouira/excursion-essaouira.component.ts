import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-excursion-essaouira',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './excursion-essaouira.component.html',
  styleUrl: './excursion-essaouira.component.css'
})
export class ExcursionEssaouiraComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Excursions à Essaouira : Explorez la Ville des Alizés et ses Environs');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez les meilleures excursions à Essaouira, une ville pleine de charme et d’histoire. Profitez de visites guidées pour explorer ses plages, sa médina et ses sites historiques.' },
      { name: 'keywords', content: 'excursion Essaouira, visites Essaouira, excursions Maroc, tours Essaouira, médina Essaouira' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Excursions à Essaouira : Explorez la Ville des Alizés et ses Environs' },
      { property: 'og:description', content: 'Découvrez les meilleures excursions à Essaouira, une ville pleine de charme et d’histoire. Profitez de visites guidées pour explorer ses plages, sa médina et ses sites historiques.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/excursion-essaouira.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/excursion-essaouira' }
    ]);
  }
}
