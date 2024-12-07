import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-car-rental-marrakech-airport',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './car-rental-marrakech-airport.component.html',
  styleUrl: './car-rental-marrakech-airport.component.css'
})
export class CarRentalMarrakechAirportComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Car Rental at Marrakech Airport: Convenient and Affordable Options');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Rent a car directly at Marrakech Menara Airport with BrfaCars. Choose from a variety of affordable cars and start your adventure in Marrakech without delay.' },
      { name: 'keywords', content: 'Car rental Marrakech airport, rent a car Marrakech Menara, car hire Marrakech, rent a car Marrakech airport, affordable car rental Morocco' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Car Rental at Marrakech Airport: Convenient and Affordable Options' },
      { property: 'og:description', content: 'Rent a car directly at Marrakech Menara Airport with BrfaCars. Choose from a variety of affordable cars and start your adventure in Marrakech without delay.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/marrakech-airport-car-rental.jpeg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/car-rental-marrakech-airport' }
    ]);
  }
}
