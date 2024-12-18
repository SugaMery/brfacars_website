import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-place-agadir',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './place-agadir.component.html',
  styleUrl: './place-agadir.component.css'
})
export class PlaceAgadirComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Place Mohammed V Agadir - Découvrez le Cœur de la Ville');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Découvrez la Place Mohammed V à Agadir, le cœur vibrant de la ville. Une belle place centrale entourée de cafés, commerces et points d\'intérêt, idéale pour une promenade.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Place Agadir, Place Mohammed V Agadir, visite Agadir, attractions Agadir, promenade Agadir',
    });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Place Mohammed V Agadir - Découvrez le Cœur de la Ville',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Découvrez la Place Mohammed V à Agadir, le cœur vibrant de la ville. Une belle place centrale entourée de cafés, commerces et points d\'intérêt, idéale pour une promenade.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.brfacars.com/assets/images/place-agadir.jpg',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.brfacars.com/blog/place-agadir',
    });
  }
  
}
