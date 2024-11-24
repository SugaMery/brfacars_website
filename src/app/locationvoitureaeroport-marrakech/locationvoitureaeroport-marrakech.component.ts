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

interface Voiture {
  image: string;
  title: string;
  model: string;
  fuel: string;
  year: number;
  transmission: string;
  price: number;
  category: string;
}

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
  generateWhatsAppMessage(car: any): string {
    return encodeURIComponent(
      `Je souhaite réserver cette voiture : ${car.title}\n` +
      `Modèle : ${car.model}\n` +
      `Carburant : ${car.fuel}\n` +
      `Année : ${car.year}\n` +
      `Transmission : ${car.transmission}\n` +
      `Prix : ${car.price} MAD\n` +
      `Catégorie : ${car.category}`
    );
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
      "@type": "AutoRental",
      "name": "Location de voiture à l'aéroport de Marrakech Menara",
      "image": "https://brfacars.com/assets/images/post7.webp",
      "description": "Louez une voiture à l'aéroport de Marrakech Menara avec BrfaCars. Choisissez parmi une large gamme de véhicules et bénéficiez d'un service de qualité pour vos déplacements à Marrakech.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "bestRating": "5",
        "ratingCount": "150"
      },
      "url": "https://brfacars.com/location-voiture-aeroport-marrakech-guide-complet",
      "offers": {
        "@type": "Offer",
        "url": "https://brfacars.com/location-voiture-aeroport-marrakech-guide-complet",
        "priceCurrency": "MAD",
        "price": "200",
        "priceValidUntil": "2024-12-31"
      }
    };

    // Create a script tag for the JSON-LD data
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);

    // Append the script to the <head> element of the document
    this.renderer.appendChild(this.document.head, script);
  }

  voitures: Voiture[] = 
  [
    { image: '../../assets/images/voitures/citroen_berlingo.png', title: 'Citroën Berlingo', model: 'Essence Manuel', fuel: 'Diesel', year: 2023, transmission: 'Manuel', price: 300, category: 'Citadine' },
    { image: '../../assets/images/voitures/citroen_c3.png', title: 'Citroën C3', model: 'Diesel Automatique', fuel: 'Diesel', year: 2022, transmission: 'Manuel', price: 300, category: 'Citadine' },
    { image: '../../assets/images/voitures/Citroen-C-Elysee.png', title: 'Citroën C-Elysee', model: 'Essence Manuel', fuel: 'Essence', year: 2021, transmission: 'Automatique', price: 250, category: 'Berline' },
    { image: '../../assets/images/voitures/citroen-jumpy.png', title: 'Citroën Jumpy', model: 'Diesel Manuel', fuel: 'Diesel', year: 2020, transmission: 'Manuel', price: 400, category: 'Berline' },
    { image: '../../assets/images/voitures/clio4.png', title: 'Renault Clio 4', model: 'Essence Automatique', fuel: 'Essence', year: 2023, transmission: 'Automatique', price: 350, category: 'SUV' },
    { image: '../../assets/images/voitures/clio4.png', title: 'Renault Clio 4', model: 'Essence Automatique', fuel: 'Diesel', year: 2023, transmission: 'Manuel', price: 300, category: 'SUV' },
    { image: '../../assets/images/voitures/dacia-dokker.png', title: 'Dacia Dokker', model: 'Diesel Manuel', fuel: 'Diesel', year: 2022, transmission: 'Manuel', price: 350, category: 'SUV' },
    { image: '../../assets/images/voitures/dacia-duster.png', title: 'Dacia Duster', model: 'Essence Automatique', fuel: 'Essence', year: 2023, transmission: 'Automatique', price: 400, category: 'SUV' },
    { image: '../../assets/images/voitures/dacia-lodgy.png', title: 'Dacia Lodgy', model: 'Diesel Manuel', fuel: 'Diesel', year: 2021, transmission: 'Manuel', price: 370, category: 'SUV' },
    { image: '../../assets/images/voitures/dacia-logan.png', title: 'Dacia Logan', model: 'Diesel Manuel', fuel: 'Diesel', year: 2023, transmission: 'Manuel', price: 250, category: 'SUV' },
    { image: '../../assets/images/voitures/dacia-logan.png', title: 'Dacia Logan', model: 'Diesel Manuel', fuel: 'Essence', year: 2024, transmission: 'Automatique', price: 220, category: 'SUV' },

    { image: '../../assets/images/voitures/fiat_panda.png', title: 'Fiat Panda', model: 'Essence Manuel', fuel: 'Essence', year: 2022, transmission: 'Manuel', price: 200, category: 'Citadine' },
    { image: '../../assets/images/voitures/fiat_punto.png', title: 'Fiat Punto', model: 'Essence Manuel', fuel: 'Diesel', year: 2022, transmission: 'Manuel', price: 300, category: 'Citadine' },
    { image: '../../assets/images/voitures/fiat-500.png', title: 'Fiat 500', model: 'Essence Automatique', fuel: 'Essence', year: 2023, transmission: 'Automatique', price: 350, category: 'Citadine' },
    { image: '../../assets/images/voitures/ford-fiesta.png', title: 'Ford Fiesta', model: 'Essence Manuel', fuel: 'Essence', year: 2021, transmission: 'Manuel', price: 300, category: 'Berline' },
    { image: '../../assets/images/voitures/hyundai_elantra.png', title: 'Hyundai Elantra', model: 'Diesel Manuel', fuel: 'Diesel', year: 2022, transmission: 'Manuel', price: 380, category: 'SUV' },
    { image: '../../assets/images/voitures/hyundai_i20.png', title: 'Hyundai i20', model: 'Essence Automatique', fuel: 'Essence', year: 2023, transmission: 'Automatique', price: 350, category: 'SUV' },
    { image: '../../assets/images/voitures/hyundai_tucson.png', title: 'Hyundai Tucson', model: 'Essence Automatique', fuel: 'Essence', year: 2022, transmission: 'Automatique', price: 450, category: 'SUV' },
    { image: '../../assets/images/voitures/hyundai-accent.png', title: 'Hyundai Accent', model: 'Essence Manuel', fuel: 'Essence', year: 2021, transmission: 'Automatique', price: 350, category: 'Berline' },
    { image: '../../assets/images/voitures/hyundai-i10.png', title: 'Hyundai i10', model: 'Diesel Manuel', fuel: 'Essence', year: 2023, transmission: 'Automatique', price: 220, category: 'Citadine' },
    { image: '../../assets/images/voitures/jeep_cherokee.png', title: 'Jeep Cherokee', model: 'Essence Automatique', fuel: 'Essence', year: 2018, transmission: 'Automatique', price: 500, category: '4x4' },
    { image: '../../assets/images/voitures/jeep_rengant.png', title: 'Jeep Renegade', model: 'Diesel Automatique', fuel: 'Essence', year: 2023, transmission: 'Automatique', price: 500, category: '4x4' },
    { image: '../../assets/images/voitures/kia-picanto.png', title: 'Kia Picanto', model: 'Essence Manuel', fuel: 'Essence', year: 2021, transmission: 'Automatique', price: 250, category: 'Citadine' },
    { image: '../../assets/images/voitures/peugeot-208.png', title: 'Peugeot 208', model: 'Essence Automatique', fuel: 'Diesel', year: 2020, transmission: 'Manuel', price: 300, category: 'SUV' },
    { image: '../../assets/images/voitures/renault_clio5.png', title: 'Renault Clio 5', model: 'Essence Manuel', fuel: 'Diesel', year: 2023, transmission: 'Manuel', price: 350, category: 'Berline' },
    { image: '../../assets/images/voitures/skoda-fabia.png', title: 'Skoda Fabia', model: 'Diesel Manuel', fuel: 'Essence', year: 2018, transmission: 'Automatique', price: 450, category: 'Berline' },
    { image: '../../assets/images/voitures/toyota-yaris.png', title: 'Toyota Yaris', model: 'Essence Automatique', fuel: 'Essence', year: 2023, transmission: 'Automatique', price: 400, category: 'Citadine' }
];
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
