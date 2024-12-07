import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-dacia-agadir',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './dacia-agadir.component.html',
  styleUrl: './dacia-agadir.component.css'
})
export class DaciaAgadirComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Dacia Car Rental in Agadir: Affordable and Reliable Options');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Rent a Dacia in Agadir for a comfortable and budget-friendly travel experience. Explore the city and its surroundings with a reliable and affordable Dacia car from BrfaCars.' },
      { name: 'keywords', content: 'Dacia car rental Agadir, rent a Dacia Agadir, affordable Dacia Agadir, car hire Dacia Agadir, Morocco car rental' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Dacia Car Rental in Agadir: Affordable and Reliable Options' },
      { property: 'og:description', content: 'Rent a Dacia in Agadir for a comfortable and budget-friendly travel experience. Explore the city and its surroundings with a reliable and affordable Dacia car from BrfaCars.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/dacia-agadir.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/dacia-agadir' }
    ]);
  }
}