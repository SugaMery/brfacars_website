import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-excursiones-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './excursiones-marrakech.component.html',
  styleUrl: './excursiones-marrakech.component.css'
})
export class ExcursionesMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Excursions à Marrakech : Découvrez la Ville Rouge et ses Environs');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({ name: 'description', content: 'Découvrez les meilleures excursions à Marrakech, la Ville Rouge du Maroc. Explorez ses souks, ses monuments historiques et partez à l’aventure dans le désert ou les montagnes de l’Atlas.' });
    this.metaService.updateTag({ name: 'keywords', content: 'excursion Marrakech, visites Marrakech, excursions Maroc, tours Marrakech, souks Marrakech' });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
    
    // Open Graph Tags
    this.metaService.updateTag({ property: 'og:title', content: 'Excursions à Marrakech : Découvrez la Ville Rouge et ses Environs' });
    this.metaService.updateTag({ property: 'og:description', content: 'Découvrez les meilleures excursions à Marrakech, la Ville Rouge du Maroc. Explorez ses souks, ses monuments historiques et partez à l’aventure dans le désert ou les montagnes de l’Atlas.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.brfacars.com/assets/images/excursion-marrakech.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.brfacars.com/blog/excursion-marrakech' });
    
  }
}
