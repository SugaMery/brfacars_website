import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-car-rental-essaouira',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './car-rental-essaouira.component.html',
  styleUrl: './car-rental-essaouira.component.css'
})
export class CarRentalEssaouiraComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Car Rental in Essaouira: Explore Morocco’s Coastal Gem with Ease');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Rent a car in Essaouira with BrfaCars. Discover the charm of Morocco’s coastal city, from its historic medina to beautiful beaches, with flexible car rental options.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Car rental Essaouira, rent a car Essaouira, Essaouira car hire, rent a car Morocco, Essaouira car rental services'
    });
    this.metaService.updateTag({
      name: 'author',
      content: 'BrfaCars'
    });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Car Rental in Essaouira: Explore Morocco’s Coastal Gem with Ease'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Rent a car in Essaouira with BrfaCars. Discover the charm of Morocco’s coastal city, from its historic medina to beautiful beaches, with flexible car rental options.'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/essaouira-car-rental.jpg'
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/car-rental-essaouira'
    });
  }
  
}
