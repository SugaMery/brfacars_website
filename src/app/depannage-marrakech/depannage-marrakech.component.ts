import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-depannage-marrakech',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './depannage-marrakech.component.html',
  styleUrl: './depannage-marrakech.component.css'
})
export class DepannageMarrakechComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setTitle();
    this.setMetaTags();
  }

  private setTitle(): void {
    this.titleService.setTitle('Dépannage à Marrakech: Services Rapides et Fiables');
  }

  private setMetaTags(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Besoin d\'un dépannage à Marrakech? Nos services de dépannage rapide et fiable couvrent tous vos besoins, que ce soit pour une panne de voiture, un appareil électroménager ou un dépannage d\'urgence.' },
      { name: 'keywords', content: 'dépannage Marrakech, dépannage voiture Marrakech, dépannage électroménager Marrakech, dépannage urgence Marrakech, services dépannage Marrakech' },
      { name: 'author', content: 'BrfaCars' },
      { property: 'og:title', content: 'Dépannage à Marrakech: Services Rapides et Fiables' },
      { property: 'og:description', content: 'Besoin d\'un dépannage à Marrakech? Nos services de dépannage rapide et fiable couvrent tous vos besoins, que ce soit pour une panne de voiture, un appareil électroménager ou un dépannage d\'urgence.' },
      { property: 'og:image', content: 'https://www.brfacars.com/assets/images/depannage-marrakech.jpg' },
      { property: 'og:url', content: 'https://www.brfacars.com/blog/depannage-marrakech' }
    ]);
  }
}
