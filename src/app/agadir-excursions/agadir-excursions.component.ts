import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-agadir-excursions',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './agadir-excursions.component.html',
  styleUrl: './agadir-excursions.component.css'
})
export class AgadirExcursionsComponent {
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Excursions à Agadir : Découvrez les Meilleures Activités et Visites | BrfaCars Blog');
  }

  public setMetaTags(): void {
    this.meta.updateTag({
      name: 'description',
      content: "Découvrez les meilleures excursions et activités à Agadir. Explorez les plages, les montagnes et les sites historiques tout en profitant d'une voiture de location avec BrfaCars.",
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'excursions Agadir, visites Agadir, activités Agadir, location voiture Agadir, excursions au Maroc, Agadir tourisme, BrfaCars blog',
    });
    this.meta.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Excursions à Agadir : Découvrez les Meilleures Activités et Visites | BrfaCars Blog',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: "Découvrez les meilleures excursions et activités à Agadir. Explorez la ville, ses plages et ses montagnes tout en profitant d'une voiture de location.",
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/excursion-agadir.jpg',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/agadir-excursions',
    });
  }
  
}
