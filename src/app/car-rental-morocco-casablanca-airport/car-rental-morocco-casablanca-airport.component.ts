import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-car-rental-morocco-casablanca-airport',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './car-rental-morocco-casablanca-airport.component.html',
  styleUrl: './car-rental-morocco-casablanca-airport.component.css'
})
export class CarRentalMoroccoCasablancaAirportComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Car Rental at Casablanca Airport: Convenient and Affordable Options');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Rent a car at Casablanca Mohammed V Airport for a smooth and convenient travel experience. Find affordable rental options and explore Casablanca and beyond with BrfaCars.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'car rental Casablanca Airport, rent a car at Casablanca Airport, car hire Casablanca Airport, affordable car rental Casablanca, Morocco car rental'
    });
    this.metaService.updateTag({
      name: 'author',
      content: 'BrfaCars'
    });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Car Rental at Casablanca Airport: Convenient and Affordable Options'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Rent a car at Casablanca Mohammed V Airport for a smooth and convenient travel experience. Find affordable rental options and explore Casablanca and beyond with BrfaCars.'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/casablanca-airport-car-rental.jpg'
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/car-rental-morocco-casablanca-airport'
    });
  }
  
}
