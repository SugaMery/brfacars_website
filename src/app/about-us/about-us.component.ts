import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';


declare var $: any;
declare var Swiper: any;
declare var WOW: any;

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,PreloaderComponent,CommonModule, FormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  loadScripts(): void {
    const scripts = [
      '/assets/js/jquery-3.7.1.min.js',
      '/assets/js/jquery-ui.js',
      '/assets/js/bootstrap.min.js',
      '/assets/js/validator.min.js',
      '/assets/js/jquery.slicknav.js',
      '/assets/js/swiper-bundle.min.js',
      '/assets/js/jquery.waypoints.min.js',
      '/assets/js/jquery.counterup.min.js',
      '/assets/js/jquery.magnific-popup.min.js',
      '/assets/js/SmoothScroll.js',
      '/assets/js/parallaxie.js',
      '/assets/js/gsap.min.js',
      '/assets/js/magiccursor.js',
      '/assets/js/SplitText.js',
      '/assets/js/ScrollTrigger.min.js',
      '/assets/js/jquery.mb.YTPlayer.min.js',
      '/assets/js/wow.js',
      '/assets/js/function.js'
    ];

    this.loadScriptArray(scripts);
  }

  loadScriptArray(scripts: string[]): void {
    let loadedScripts = 0;
    scripts.forEach(scriptSrc => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.onload = () => {
        console.log(`Script loaded successfully: ${scriptSrc}`);
        loadedScripts++;
        if (loadedScripts === scripts.length) {
          this.initializePlugins();  // Initialize plugins after all scripts have been loaded
        }
      };
      script.onerror = (error) => {
        console.error(`Error loading script: ${scriptSrc}`, error);
      };
      document.body.appendChild(script);
    });
  }

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    // Set page meta tags and title for SEO
    //this.setMetaTags();
    this.setTitle('À propos de BRFA Cars - Location de Voiture à Marrakech');
  }

    // Public method to set the page title
    public setTitle(newTitle: string): void {
      this.title.setTitle(newTitle);
    }

    
  public setMetaTags(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        "Apprenez-en plus sur BRF Cars et notre engagement à fournir un service de location de voiture exceptionnel à Marrakech. Découvrez notre équipe et notre histoire.",
    });
    this.meta.updateTag({ name: 'author', content: 'BRFA Cars' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'À propos de nous, BRF Cars, location de voiture, Marrakech, voitures de location, entreprise Marrakech',
    });
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.updateTag({ httpEquiv: 'x-ua-compatible', content: 'ie=edge' });
  
    // Open Graph Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'À propos de BRFA Cars - Location de Voiture à Marrakech',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        "Découvrez l'histoire de BRFA Cars et notre mission de rendre la location de voiture à Marrakech facile et abordable pour tous.",
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://brfacars.com/apropos-de-nous',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://brfacars.com/assets/images/post1.png',
    });
  
    // Twitter Card Tags
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'À propos de BRFA Cars - Location de Voiture à Marrakech',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        "En savoir plus sur BRFA Cars et comment nous offrons les meilleures options de location de voiture à Marrakech.",
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://brfacars.com/assets/images/post1.png',
    });
  
    this.meta.updateTag({
      title: 'À propos de BRFA Cars - Location de Voiture à Marrakech',
    });
  }
  
  // Initialize plugins after all scripts are loaded
  initializePlugins(): void {
    // Initialize SlickNav
    if (typeof $.fn.slicknav === 'function') {
      $('#menu').slicknav();  // Initialize slicknav on a menu with id "menu"
      console.log('SlickNav initialized');
    }

    // Initialize Swiper
    if (typeof Swiper === 'function') {
      new Swiper('.swiper-container', {
        autoplay: true,
        navigation: true,
        pagination: { clickable: true },
      });
      console.log('Swiper initialized');
    }

    // Initialize WOW.js (for animations)
    if (typeof WOW === 'function') {
      new WOW().init();
      console.log('WOW.js initialized');
    }

    // Other plugin initializations if needed
    // For example, Magic Cursor, Waypoints, etc.
  }

  ngOnInit(): void {
    this.setMetaTags();

    this.loadScripts();  // Load all required scripts
  }
}
