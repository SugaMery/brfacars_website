import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-maroc-com',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './maroc-com.component.html',
  styleUrl: './maroc-com.component.css'
})
export class MarocComComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voiture au Maroc - Réservez en Ligne avec BrfaCars');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Réservez une voiture au Maroc avec BrfaCars et explorez tout ce que le pays a à offrir. Des véhicules modernes à des prix compétitifs, prêts à vous accompagner dans vos aventures.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'location voiture Maroc, réserver voiture Maroc, voitures de location Maroc, explorer le Maroc en voiture',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Location de Voiture au Maroc - Réservez en Ligne avec BrfaCars',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Réservez une voiture au Maroc avec BrfaCars et explorez tout ce que le pays a à offrir. Des véhicules modernes à des prix compétitifs, prêts à vous accompagner dans vos aventures.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/location-maroc-com.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/location-maroc',
    });
  }
  
  
  
}
