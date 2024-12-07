import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-agadir-tours',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './agadir-tours.component.html',
  styleUrl: './agadir-tours.component.css'
})
export class AgadirToursComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Tours à Agadir : Explorez Agadir et ses Environs avec BrfaCars');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez les meilleurs tours à Agadir avec BrfaCars. Explorez la ville, ses plages, montagnes et souks avec nos excursions guidées et personnalisées.' },
      { name: 'keywords', content: 'tours Agadir, excursions Agadir, visites guidées Agadir, tours de ville Agadir, excursions en groupe Agadir' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Tours à Agadir : Explorez Agadir et ses Environs avec BrfaCars' },
      { property: 'og:description', content: 'Découvrez les meilleurs tours à Agadir avec BrfaCars. Explorez la ville, ses plages, montagnes et souks avec nos excursions guidées.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/agadir-tours.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/agadir-tours' }
    ]);
  }
}
