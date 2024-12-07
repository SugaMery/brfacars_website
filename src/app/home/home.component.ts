import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from "../preloader/preloader.component";
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog, BlogService } from '../blog.service';
import { Title, Meta } from '@angular/platform-browser';

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
  selector: 'app-home',
  standalone: true,
  providers: [Title],
  imports: [HeaderComponent, FooterComponent, PreloaderComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.addJsonLdSchema();

    this.loadScripts();  // Load all required scripts
    this.loadBlogs();  // Call the loadBlogs method to fetch blog data
    this.setMetaTags(); // Set the meta tags when the component loads

  }

  setMetaTags(): void {
    const title = 'Location de Voiture à Marrakech - BRFA Cars';
    const description = 'Découvrez les meilleures options de location de voiture à Marrakech avec BRF Cars. Louez des véhicules à des prix abordables pour explorer la ville et ses environs.';
    const keywords = 'location de voiture, Marrakech, location voiture Marrakech, BRF Cars, voitures en location, voyage Marrakech, location voiture Maroc';
    const imageUrl = 'https://www.brfacars.com/assets/images/post1.png';
    const url = 'https://www.brfacars.com/location-voiture-marrakech';

    // Set the title
    this.titleService.setTitle(title);

    // Set standard meta tags
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'author', content: 'BRFA Cars' });

    // Set Open Graph meta tags for social media sharing
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:site_name', content: 'BRF Cars' });

    // Set Twitter card meta tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:site', content: '@BRF_Cars' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
  }
  formatTitle(title: string): string {
    return title
      .toLowerCase() // Convert to lowercase
      .normalize('NFD') // Normalize the string
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ''); // Remove any non-word characters (except hyphens)
  }
  selectedCategory: string = '';
  selectedLieu: string = '';
  selectedLieuRetour: string = '';
  blogs: Blog[] = [];
  constructor(    private renderer: Renderer2,
    private router: Router,private blogService: BlogService,private titleService: Title, private metaService: Meta,@Inject(DOCUMENT) private document: Document ) {}
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
  onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Cast the event target to HTMLSelectElement
    this.selectedCategory = selectElement.value; // Get the selected value
  }
  onLieuChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Cast the event target to HTMLSelectElement
    this.selectedLieu = selectElement.value; // Get the selected value
  }
  onLieuRetourChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Cast the event target to HTMLSelectElement
    this.selectedLieuRetour = selectElement.value; // Get the selected value
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

  addJsonLdSchema() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "AutoRental",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "/"
      },
      "name": "Location de voiture Marrakech chez Brfacars",
      "image": "https://brfacars.com/assets/images/post7.webp",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6374874",
        "reviewCount": "855"
      },
      "reviews": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Léo HB"
          },
          "datePublished": "2024-11-29",
          "description": "super service, la kia picanto était parfaite pour traverser le Maroc",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Noureddine Eljaouhari"
          },
          "datePublished": "2024-09-23",
          "description": "Bon prix et magnifique service",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ariane Nuchelmans"
          },
          "datePublished": "2024-09-16",
          "description": "Tarifs compétitifs. Voitures en excellent état. Hicham est très professionnel et tout aussi aimable.\nA recommander !",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Khadija Rachdi"
          },
          "datePublished": "2024-03-28",
          "description": "Je suis pleinement satisfait de ma location de voiture avec cette entreprise. Le processus de réservation était simple et efficace, et le personnel était extrêmement serviable et courtois. La voiture que j'ai louée était en excellent état et m'a permis de voyager en toute tranquillité d'esprit. Je recommande vivement cette entreprise à tous ceux qui recherchent une location de voiture de qualité à un prix abordable",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Adil Baya"
          },
          "datePublished": "2024-02-12",
          "description": "Professionnel Yassin rien à dire",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "charlie ciccoli"
          },
          "datePublished": "2024-01-18",
          "description": "Notre expérience de location c'est très bien passé, avec tous les avis négatifs que l'on peut lire sur les locations de voiture à Marrakech j'avais un peu d'appréhension. J'ai préféré passer par une compagnie reconnue, pour eviter les problèmes et c'était parfait.\n\nPapiers à jours, voiture picanto quasiment neuve, très bonne état, bonne organisation, nous avons loué une semaine et payé 23€ / jours avec deux conducteurs, déposé un dépôt avec une carte crédit de 1400dh, annuler au retour de la voiture.\n\nAttention sur la route, les limitations de vitesses change régulièrement, il y a beaucoup de contrôles.\n\nMerci du service, je recommande",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "W W"
          },
          "datePublished": "2023-08-09",
          "description": "Encore une fois je suis toujours satisfait, Mr Reda qui a géré ma réservation à comme d’habitude trouvé le bon véhicule et au bon prix, les véhicules sont très bien entretenu et propre.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Bertrand Florisoone"
          },
          "datePublished": "2023-08-04",
          "description": "Récupération de la voiture facile, véhicule récent et très propre.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sara"
          },
          "datePublished": "2022-05-27",
          "description": "Top service, voiture top merci bcp pour l’accueil et les conseils !!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Chris ccm"
          },
          "datePublished": "2024-11-22",
          "description": "Tarifs competitifs, toujours disponibles et personnel au top.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        }
      ],
      "areaServed": {
        "@type": "City",
        "name": "Marrakech"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Marrakech",  // Remplacez par l'adresse réelle
        "addressLocality": "Marrakech",
        "addressRegion": "Marrakech",
        "postalCode": "40000",  // Remplacez par le code postal réel
        "addressCountry": "MA"
      }
    };

    // Create a script tag for the JSON-LD data
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);

    // Append the script to the <head> element of the document
    this.renderer.appendChild(this.document.head, script);
  }
  
  onSearch() {
    this.router.navigate(['/voitures']);
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



  // Method to load blogs using BlogService
  loadBlogs(): void {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      console.log("fffff",data)
      this.blogs = data;  // Assign the fetched data to blogs array
    });
  }
}
