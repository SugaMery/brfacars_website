import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-essaouira-location',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './essaouira-location.component.html',
  styleUrl: './essaouira-location.component.css'
})
export class EssaouiraLocationComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Location de Voitures à Essaouira: Explorez la Ville en Toute Liberté');
  }

  private setMetaTags(): void {
    this.metaService.updateTag({ name: 'description', content: 'Louez une voiture à Essaouira et explorez cette ville magnifique à votre rythme. Profitez de nos offres de location flexibles et abordables pour découvrir Essaouira et ses environs.' });
    this.metaService.updateTag({ name: 'keywords', content: 'location voiture Essaouira, location voiture Essaouira pas cher, louer voiture Essaouira, location voiture Maroc, voiture de location Essaouira' });
    this.metaService.updateTag({ name: 'author', content: 'BrfaCars' });
  
    // Open Graph Tags
    this.metaService.updateTag({ property: 'og:title', content: 'Location de Voitures à Essaouira: Explorez la Ville en Toute Liberté' });
    this.metaService.updateTag({ property: 'og:description', content: 'Louez une voiture à Essaouira et explorez cette ville magnifique à votre rythme. Profitez de nos offres de location flexibles et abordables pour découvrir Essaouira et ses environs.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.brfacars.com/assets/images/essaouira-location.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.brfacars.com/blog/essaouira-location' });
  }
  
}
