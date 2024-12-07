import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-car-rental-casablanca-airport',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './car-rental-casablanca-airport.component.html',
  styleUrl: './car-rental-casablanca-airport.component.css'
})
export class CarRentalCasablancaAirportComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Car Rental at Casablanca Airport: Convenient and Reliable Options');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Rent a car at Casablanca Airport with BrfaCars. Enjoy a seamless arrival in Morocco and explore the city and beyond with reliable car rental options directly at the airport.' },
      { name: 'keywords', content: 'Car rental Casablanca Airport, rent a car Casablanca, Casablanca car hire, airport car rental Morocco, car rental Casablanca' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Car Rental at Casablanca Airport: Convenient and Reliable Options' },
      { property: 'og:description', content: 'Rent a car at Casablanca Airport with BrfaCars. Enjoy a seamless arrival in Morocco and explore the city and beyond with reliable car rental options directly at the airport.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/casablanca-airport-car-rental.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/car-rental-casablanca-airport' }
    ]);
  }
}