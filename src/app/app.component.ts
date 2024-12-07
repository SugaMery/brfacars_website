import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent,PreloaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'brfacars-website';


  constructor(@Inject(PLATFORM_ID) private platformId: Object,  private renderer: Renderer2,@Inject(DOCUMENT) private document: Document ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScriptsSequentially([
        'assets/js/jquery-3.7.1.min.js',
        'assets/js/jquery-ui.js',
        'assets/js/bootstrap.min.js',
        'assets/js/validator.min.js',
        'assets/js/jquery.slicknav.js',
        'assets/js/swiper-bundle.min.js',
      ]);
    }
    this.addJsonLdSchema()
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
  private loadScriptsSequentially(scriptUrls: string[]): void {
    scriptUrls
      .reduce((promise, url) => {
        return promise.then(() => this.loadScript(url));
      }, Promise.resolve())
      .then(() => {
        console.log('All scripts loaded sequentially');
      });
  }

  private loadScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = false; // Ensure scripts load in order
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
      document.body.appendChild(script);
    });
  }
}
