import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-excursion-agadir',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './excursion-agadir.component.html',
  styleUrl: './excursion-agadir.component.css'
})
export class ExcursionAgadirComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.setTitle();
    this.setMetaTags();
  }

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Excursions à Agadir : Découvrez les Trésors Cachés de la Ville et de Ses Environs');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({ name: 'description', content: 'Découvrez les meilleures excursions à Agadir et explorez la ville ainsi que ses magnifiques environs. Profitez de circuits personnalisés pour une expérience inoubliable.' });
    this.metaService.updateTag({ name: 'keywords', content: 'excursion Agadir, excursions Agadir, visites Agadir, excursions Maroc, tours Agadir' });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({ property: 'og:title', content: 'Excursions à Agadir : Découvrez les Trésors Cachés de la Ville et de Ses Environs' });
    this.metaService.updateTag({ property: 'og:description', content: 'Découvrez les meilleures excursions à Agadir et explorez la ville ainsi que ses magnifiques environs. Profitez de circuits personnalisés pour une expérience inoubliable.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.brfacars.com/assets/images/excursion-agadir.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.brfacars.com/blog/excursion-agadir' });
  }
  
}
