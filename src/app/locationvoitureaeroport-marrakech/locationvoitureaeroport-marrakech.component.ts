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
    this.setTitle("Location de Voiture à l'Aéroport de Marrakech - Ménar");

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
      "address": {
  "@type": "PostalAddress",
  "streetAddress": "Aéroport Marrakech",
  "addressLocality": "Marrakech",
  "addressRegion": "Marrakech",
  "postalCode": "40000",
  "addressCountry": "MA"
}
,
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
      }
    };

    // Create a script tag for the JSON-LD data
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);

    // Append the script to the <head> element of the document
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
