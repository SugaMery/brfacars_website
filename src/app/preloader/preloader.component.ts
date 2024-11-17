import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent {
  constructor() { }

  ngOnInit(): void {
    const preloader = document.querySelector('.preloader') as HTMLElement;

    // Masquer le préchargeur après que la fenêtre a chargé
    const hidePreloader = () => {
      if (preloader) {
        preloader.style.transition = 'opacity 0.6s ease-out'; // Appliquer une transition
        preloader.style.opacity = '0'; // Faire disparaître le préchargeur
        setTimeout(() => {
          preloader.style.display = 'none'; // Masquer complètement
        }, 600); // Correspond à la durée de la transition
      }
    };

    // Tentative principale avec window.onload
    window.onload = hidePreloader;

    // Fallback pour iOS ou en cas d'échec
    setTimeout(() => {
      if (preloader && preloader.style.opacity !== '0') {
        console.warn('Fallback triggered: Preloader not hidden by window.onload');
        hidePreloader();
      }
    }, 2000); // Temps d'attente maximum (5 secondes)
  }
}
