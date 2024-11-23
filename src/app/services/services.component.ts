import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
declare var Swiper: any;
declare var WOW: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  public setServicesMetaTags(): void {
    this.setTitle('Services de Location de Voiture à Marrakech - BRFA Cars');

    this.meta.updateTag({
      name: 'description',
      content:
        "Découvrez les services de location de voiture de BRFA Cars à Marrakech. Nous proposons une large gamme de véhicules adaptés à tous vos besoins pour explorer la ville et ses environs.",
    });
    this.meta.updateTag({ name: 'author', content: 'BRFA Cars' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'location de voiture, services, Marrakech, BRFA Cars, location voiture Marrakech, véhicules, voyage Marrakech, location voiture Maroc',
    });
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.updateTag({ httpEquiv: 'x-ua-compatible', content: 'ie=edge' });
  
    // Open Graph Meta Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Services de Location de Voiture à Marrakech - BRFA Cars',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        "BRFA Cars vous propose une gamme de services de location de voiture pour répondre à tous vos besoins à Marrakech. Louez une voiture de qualité à des prix compétitifs.",
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://brfacars.com/services',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://brfacars.com/assets/images/post2.png',
    });
  
    // Twitter Card Meta Tags
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Services de Location de Voiture à Marrakech - BRFA Cars',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        "Louez une voiture à Marrakech avec BRFA Cars et profitez de nos services de qualité. Découvrez nos offres et réservez dès maintenant.",
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://brfacars.com/assets/images/post2.png',
    });
  
    this.meta.updateTag({
      title: 'Services de Location de Voiture à Marrakech - BRFA Cars',
    });
  }
  constructor(
    private meta: Meta,
    private title: Title,

  ){}
  public setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }
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
    this.setServicesMetaTags();
    this.loadScripts();  // Load all required scripts
  }
}
