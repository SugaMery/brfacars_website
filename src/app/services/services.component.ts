import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
