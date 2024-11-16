import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FooterComponent, PreloaderComponent, HeaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
