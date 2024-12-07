import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-car-rental-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './car-rental-marrakech.component.html',
  styleUrl: './car-rental-marrakech.component.css'
})
export class CarRentalMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Car Rental in Marrakech: Explore the Red City at Your Own Pace');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Rent a car in Marrakech with BrfaCars. Discover the vibrant city of Marrakech, from the historical medina to the Atlas Mountains, with a car rental that suits your needs.' },
      { name: 'keywords', content: 'Car rental Marrakech, rent a car Marrakech, Marrakech car hire, rent a car Morocco, Marrakech car rental services' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Car Rental in Marrakech: Explore the Red City at Your Own Pace' },
      { property: 'og:description', content: 'Rent a car in Marrakech with BrfaCars. Discover the vibrant city of Marrakech, from the historical medina to the Atlas Mountains, with a car rental that suits your needs.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/marrakech-car-rental.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/car-rental-marrakech' }
    ]);
  }
}
