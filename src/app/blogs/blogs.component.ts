import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { Blog, BlogService } from '../blog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
declare var $: any;
declare var Swiper: any;
declare var WOW: any;
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent,CommonModule, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: Blog[] = [];
  formatTitle(title: string): string {
    return title
      .toLowerCase() // Convert to lowercase
      .normalize('NFD') // Normalize the string
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ''); // Remove any non-word characters (except hyphens)
  }
  constructor(private blogService: BlogService, private titleService: Title, private metaService: Meta) { }
  setMetaTags(): void {
    // Vous pouvez définir un titre général pour la page des blogs, 
    // ou une logique pour définir des titres spécifiques en fonction du contenu des blogs.
    const title = 'Blogs - BRFA Cars';
    const description = 'Lisez les derniers articles sur la location de voiture à Marrakech, les conseils de voyage et les offres spéciales de BRFA Cars.';
    const keywords = 'blog location de voiture, Marrakech, voyage à Marrakech, conseils de location de voiture, BRFA Cars';
    const imageUrl = 'https://www.brfacars.com/assets/images/blog-thumbnail.png';
    const url = 'https://www.brfacars.com/blogs';  // URL de la page des blogs

    // Mettre à jour le titre de la page
    //this.titleService.setTitle(title);

    // Mettre à jour les balises meta standards
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'author', content: 'BRFA Cars' });

    // Mettre à jour les balises Open Graph pour les réseaux sociaux
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:site_name', content: 'BRFA Cars' });

    // Mettre à jour les balises Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:site', content: '@BRF_Cars' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
  }
  ngOnInit(): void {
    this.loadBlogs();  // Call the loadBlogs method to fetch blog data
    this.loadScripts();  // Load all required scripts
   this.setMetaTags();
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
  displayedBlogs: Blog[] = [];
  currentPage: number = 1;
  pageSize: number = 5; // Number of blogs per page
  totalBlogs: number = 0;

  loadBlogs(): void {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;
      this.totalBlogs = data.length;
      this.updateDisplayedBlogs();
    });
  }

  updateDisplayedBlogs(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedBlogs = this.blogs.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages()) {
      this.currentPage = page;
      this.updateDisplayedBlogs();
    }
  }

  totalPages(): number {
    return Math.ceil(this.totalBlogs / this.pageSize);
  }
}
