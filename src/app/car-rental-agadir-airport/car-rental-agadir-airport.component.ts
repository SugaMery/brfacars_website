import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-car-rental-agadir-airport',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './car-rental-agadir-airport.component.html',
  styleUrl: './car-rental-agadir-airport.component.css'
})
export class CarRentalAgadirAirportComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Car Rental at Agadir Airport: Convenient and Affordable Options');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Rent a car at Agadir Airport with BrfaCars. Enjoy a smooth arrival and explore the city and its surroundings with convenient car rental options available directly at the airport.' },
      { name: 'keywords', content: 'Car rental Agadir Airport, rent a car Agadir Airport, Agadir car hire, airport car rental Morocco, car rental Agadir' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Car Rental at Agadir Airport: Convenient and Affordable Options' },
      { property: 'og:description', content: 'Rent a car at Agadir Airport with BrfaCars. Enjoy a smooth arrival and explore the city and its surroundings with convenient car rental options available directly at the airport.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/agadir-airport-car-rental.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/car-rental-agadir-airport' }
    ]);
  }
}
