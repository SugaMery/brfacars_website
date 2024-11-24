import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';


declare var $: any;
declare var Swiper: any;
declare var WOW: any;

@Component({
  selector: 'app-locationvoitureaeroport-marrakech',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './locationvoitureaeroport-marrakech.component.html',
  styleUrl: './locationvoitureaeroport-marrakech.component.css'
})
export class LocationvoitureaeroportMarrakechComponent {
  blog: any; // Object to hold blog data

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private title: Title, // Inject Title service
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document   // Inject Meta service
  ) { 

  }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      const blogId = params['id'];
      const titre = params['titre'];

        this.fetchBlogDetail('5');
        this.setMetaTags(this.blog?.seoMetaDescription,titre,blogId,this.blog.media,this.blog.title,this.blog.seoKeywords)
    });
    this.addJsonLdSchema();
    this.loadScripts();  // Load all required scripts

  }
  public setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }
  public setMetaTags(content:string,title:string,blogId:string,media:string,titleFormated:string,keywords:string): void {
    this.setTitle('Location voiture aéroport marrakech - Location de Voiture à Marrakech');

    this.meta.updateTag({
      name: 'description',
      content:
      content,
    });
    this.meta.updateTag({ name: 'author', content: 'BRFA Cars' });
    this.meta.updateTag({
      name: 'keywords',
      content:
      keywords+', location de voiture, Marrakech, voitures de location, entreprise Marrakech',
    });
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.updateTag({ httpEquiv: 'x-ua-compatible', content: 'ie=edge' });
  
    // Open Graph Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Location voiture aéroport marrakech - Location de Voiture à Marrakech',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
       content
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://brfacars.com/blog-detail/'+blogId+'/'+title,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: media,
    });
  
    // Twitter Card Tags
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Location voiture aéroport marrakech - Location de Voiture à Marrakech',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
      content
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: media
    });
  
    this.meta.updateTag({
      title: 'Location voiture aéroport marrakech - Location de Voiture à Marrakech',
    });
  }
  
  addJsonLdSchema() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",  // Type adapté pour une entreprise locale
      "name": "Location de voiture à l'aéroport de Marrakech Menara",
      "image": "https://brfars.com/assets/images/post7.webp",
      "description": "Louez une voiture à l'aéroport de Marrakech Menara avec BrfaCars. Choisissez parmi une large gamme de véhicules et bénéficiez d'un service de qualité pour vos déplacements à Marrakech.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "bestRating": "5",
        "ratingCount": "150"
      },
      "url": "https://brfacars.com/location-voiture-aeroport-marrakech-guide-complet",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Aéroport de Marrakech Menara",
        "addressLocality": "Marrakech",
        "addressRegion": "Marrakech-Safi",
        "postalCode": "40000",
        "addressCountry": "MA"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://brfacars.com/location-voiture-aeroport-marrakech-guide-complet",
        "priceCurrency": "MAD",
        "price": "200",
        "priceValidUntil": "2024-12-31",
        "eligibleRegion": {
          "@type": "Place",
          "name": "Marrakech"
        },
        "itemOffered": {
          "@type": "Product",
          "name": "Location de voiture",
          "brand": "Toyota",
          "model": "Yaris",
          "vehicleModelDate": "2024",
          "itemCondition": "New",  // Définir l'état du véhicule, "New" ou "Used"
          "vehicleIdentificationNumber": "ABC123XYZ",  // Optionnel
          "vehicleType": "Sedan"  // Type de véhicule
        }
      }
    };
  
    // Créer une balise <script> pour les données JSON-LD
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
  
    // Ajouter le script dans l'élément <head> du document
    this.renderer.appendChild(this.document.head, script);
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

  initializePlugins(): void {
    if (typeof $.fn.slicknav === 'function') {
      $('#menu').slicknav();  // Initialize slicknav on a menu with id "menu"
      console.log('SlickNav initialized');
    }

    if (typeof Swiper === 'function') {
      new Swiper('.swiper-container', {
        autoplay: true,
        navigation: true,
        pagination: { clickable: true },
      });
      console.log('Swiper initialized');
    }

    if (typeof WOW === 'function') {
      new WOW().init();
      console.log('WOW.js initialized');
    }
  }

  fetchBlogDetail(blogId: string): void {
    this.blogService.getBlogById(Number(blogId)).subscribe(data => {
      console.log("dattaaaaa", data);
      this.blog = data;

      // Update the page title and meta description dynamically
    });
  }


}
