import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-asni-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './asni-marrakech.component.html',
  styleUrl: './asni-marrakech.component.css'
})
export class AsniMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Asni Marrakech : Voyage au Coeur des Montagnes de l\'Atlas');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Explorez Asni, un village pittoresque situé à proximité de Marrakech, au cœur des montagnes de l\'Atlas. Découvrez ses paysages magnifiques, sa culture berbère et les activités uniques qui vous attendent.' },
      { name: 'keywords', content: 'Asni Marrakech, voyage Asni, excursion Asni, montagne Atlas, culture berbère, randonnée Asni, vacances à Marrakech' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Asni Marrakech : Voyage au Coeur des Montagnes de l\'Atlas' },
      { property: 'og:description', content: 'Explorez Asni, un village pittoresque situé à proximité de Marrakech, au cœur des montagnes de l\'Atlas. Découvrez ses paysages magnifiques, sa culture berbère et les activités uniques qui vous attendent.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/asni-marrakech.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/asni-marrakech' }
    ]);
  }
}
