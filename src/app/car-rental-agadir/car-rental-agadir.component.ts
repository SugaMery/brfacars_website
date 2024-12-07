import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-car-rental-agadir',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './car-rental-agadir.component.html',
  styleUrl: './car-rental-agadir.component.css'
})
export class CarRentalAgadirComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Car Rental in Agadir: Your Guide to Exploring the Beautiful City');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Rent a car in Agadir with BrfaCars. Explore the stunning beaches, markets, and attractions of Agadir at your own pace with affordable car rental options.' },
      { name: 'keywords', content: 'Car rental Agadir, rent a car Agadir, Agadir car hire, Agadir vehicle rental, car hire Morocco' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Car Rental in Agadir: Your Guide to Exploring the Beautiful City' },
      { property: 'og:description', content: 'Rent a car in Agadir with BrfaCars. Explore the stunning beaches, markets, and attractions of Agadir at your own pace with affordable car rental options.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/agadir-car-rental.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/car-rental-agadir' }
    ]);
  }
}
