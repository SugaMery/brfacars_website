import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
declare var Swiper: any;
declare var WOW: any;
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FooterComponent, PreloaderComponent, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  sendMessage() {
    const { firstName, lastName, email, phone, message } = this.formData;

    // Construct WhatsApp message
    const whatsappMessage = `Bonjour, je suis ${firstName} ${lastName}. 
Email: ${email}
Téléphone: ${phone}
Message: ${message}`;

    // Encode message and create WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/212699050501?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };
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
  constructor(
    private meta: Meta,
    private title: Title,

  ){}
  public setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  public setContactUsMetaTags(): void {

    this.setTitle('Contactez BRFA Cars pour la Location de Voiture à Marrakech');

    this.meta.updateTag({
      name: 'description',
      content:
        "Contactez BRFA Cars pour toutes vos demandes de location de voiture à Marrakech. Notre équipe est disponible pour répondre à vos questions et vous fournir des informations sur nos services.",
    });
    this.meta.updateTag({ name: 'author', content: 'BRFA Cars' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'contact, location de voiture, Marrakech, BRFA Cars, informations, service client, location voiture Maroc, assistance, questions',
    });
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.updateTag({ httpEquiv: 'x-ua-compatible', content: 'ie=edge' });
  
    // Open Graph Meta Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Contactez BRFA Cars pour la Location de Voiture à Marrakech',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        "Besoin d'aide ou d'informations ? Contactez BRFA Cars pour toutes vos questions concernant la location de voiture à Marrakech. Notre équipe est à votre disposition.",
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.BRFAacars.com/contact',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.BRFAacars.com/assets/images/page-header-bg.jpg',
    });
  
    // Twitter Card Meta Tags
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Contactez BRFA Cars pour la Location de Voiture à Marrakech',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        "Contactez-nous pour obtenir des informations ou poser vos questions sur nos services de location de voiture à Marrakech. BRFA Cars vous accompagne dans vos déplacements.",
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.BRFAacars.com/assets/images/page-header-bg.jpg',
    });
  
    this.meta.updateTag({
      title: 'Contactez BRFA Cars pour la Location de Voiture à Marrakech',
    });
  }

  
  ngOnInit(): void {
    this.setContactUsMetaTags();
    this.loadScripts();  // Load all required scripts
  }
}
