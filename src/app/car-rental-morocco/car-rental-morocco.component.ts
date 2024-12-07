import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-car-rental-morocco',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './car-rental-morocco.component.html',
  styleUrl: './car-rental-morocco.component.css'
})
export class CarRentalMoroccoComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Car Rental in Morocco: Discover the Best Deals and Destinations');
  }

  private setMetaTags(): void {
    // Update existing tags or add new ones
    this.metaService.updateTag({
      name: 'description',
      content: 'Rent a car in Morocco and explore the country’s breathtaking landscapes, from the bustling cities to the stunning beaches and deserts. Find the best rental deals with BrfaCars.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'car rental Morocco, rent a car Morocco, car hire Morocco, affordable car rental Morocco, car rental deals Morocco, Morocco car hire'
    });
    this.metaService.updateTag({
      name: 'author',
      content: 'BrfaCars'
    });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Car Rental in Morocco: Discover the Best Deals and Destinations'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Rent a car in Morocco and explore the country’s breathtaking landscapes, from the bustling cities to the stunning beaches and deserts. Find the best rental deals with BrfaCars.'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/morocco-car-rental.jpg'
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/car-rental-morocco'
    });
  }
  
}
