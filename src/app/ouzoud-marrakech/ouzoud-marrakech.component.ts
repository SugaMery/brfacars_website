import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-ouzoud-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './ouzoud-marrakech.component.html',
  styleUrl: './ouzoud-marrakech.component.css'
})
export class OuzoudMarrakechComponent {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Cascade d\'Ouzoud - Excursion au départ de Marrakech');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Découvrez la magnifique Cascade d\'Ouzoud, à une courte distance de Marrakech. Profitez d\'une excursion guidée pour explorer cette beauté naturelle, l\'une des plus grandes chutes d\'eau du Maroc.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Ouzoud Marrakech, excursion cascade d\'Ouzoud, chutes d\'eau Maroc, randonnée Marrakech, visite Ouzoud',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Cascade d\'Ouzoud - Excursion au départ de Marrakech',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Découvrez la magnifique Cascade d\'Ouzoud, à une courte distance de Marrakech. Profitez d\'une excursion guidée pour explorer cette beauté naturelle, l\'une des plus grandes chutes d\'eau du Maroc.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/ouzoud-cascade.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/ouzoud-marrakech',
    });
  }
  
}
