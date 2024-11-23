import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

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
  selector: 'app-cars-list',
  standalone: true,
  imports: [HeaderComponent, PreloaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent {

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

    // Public method to set the page title
    public setTitle(newTitle: string): void {
      this.title.setTitle(newTitle);
    }

  public setCarsListMetaTags(): void {
    this.setTitle('Liste des Voitures à Louer à Marrakech - BRFA Cars');

    this.meta.updateTag({
      name: 'description',
      content:
        "Découvrez notre large sélection de voitures à louer à Marrakech. Des véhicules modernes et bien entretenus pour tous vos besoins de transport, à des prix abordables.",
    });
    this.meta.updateTag({ name: 'author', content: 'BRFA Cars' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'location de voiture, voitures à louer, Marrakech, location voiture Marrakech, location voiture Maroc, véhicules à louer, BRFA Cars, voitures économiques, voitures de luxe',
    });
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.updateTag({ httpEquiv: 'x-ua-compatible', content: 'ie=edge' });
  
    // Open Graph Meta Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Liste des Voitures à Louer à Marrakech - BRFA Cars',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        "Explorez nos options de location de voitures à Marrakech avec des véhicules adaptés à tous vos besoins. Louez une voiture facilement avec BRFA Cars.",
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://brfacars.com/voitures',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://brfacars.com/assets/images/post7.webp',
    });
  
    // Twitter Card Meta Tags
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Liste des Voitures à Louer à Marrakech - BRFA Cars',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        "Découvrez notre flotte de voitures à louer à Marrakech. Des véhicules modernes et abordables pour vos déplacements à travers la ville et au-delà.",
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://brfacars.com/assets/images/post7.webp',
    });
  
    this.meta.updateTag({
      title: 'Liste des Voitures à Louer à Marrakech - BRFA Cars',
    });
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

  itemsPerPage = 9;
  currentPage = 1;
  filteredCars: Voiture[] = [...this.voitures];
  searchQuery = '';

  selectedCategories: { [key: string]: boolean } = {
    'all': false,
    '4x4': false,
    'Citadine': false,
    'Berline': false,
    'SUV': false
  };

  // Filters cars based on selected categories
  filterByCategory() {
    if (this.selectedCategories['all']) {
      // If "Tous" is selected, select all categories
      this.selectedCategories['4x4'] = true;
      this.selectedCategories['Citadine'] = true;
      this.selectedCategories['Berline'] = true;
      this.selectedCategories['SUV'] = true;
    } else {
      // Unselect "Tous" if any individual category is unchecked
      this.selectedCategories['all'] = Object.values(this.selectedCategories).every(v => v) ? true : false;
    }

    // Apply category filter
    this.filteredCars = this.voitures.filter(car =>
      Object.keys(this.selectedCategories).some(category =>
        this.selectedCategories[category] && car.category === category
      ) || Object.values(this.selectedCategories).every(v => !v)
    );
    this.currentPage = 1; // Reset to first page after category filter
  }

  // Calculates the total pages for pagination
  get totalPages(): number {
    return Math.ceil(this.filteredCars.length / this.itemsPerPage);
  }

  // Retrieves the cars for the current page
  get paginatedCars(): Voiture[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredCars.slice(start, end);
  }

  // Changes to a specific page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Goes to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Goes to the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  constructor(    private meta: Meta,
    private title: Title,private route: ActivatedRoute,) {}

  ngOnInit() {
    this.setCarsListMetaTags();
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.selectedCategories[category] = true;
        this.filterByCategory();
      }
    });
    this.loadScripts();  // Load all required scripts

  }
  // Handles search input and filters the cars
  onSearch() {
    this.filteredCars = this.voitures.filter(car =>
      car.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      car.fuel.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 1; // Reset to first page after search
  }

  // Clear all selected category filters
  clearFilters() {
    this.selectedCategories = {
      '4x4': false,
      'Citadine': false,
      'Berline': false,
      'SUV': false
    };
    this.filterByCategory(); // Reapply filter after clearing
  }
}
