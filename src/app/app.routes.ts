import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const  routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'location-voiture-marrakech', component: HomeComponent },

    {path: 'voitures' , component: CarsListComponent},
    {path: 'apropos-de-nous' , component: AboutUsComponent},
    {path: 'service' , component: ServicesComponent},
    {path: 'blogs' , component: BlogsComponent},
    { path: 'blog-detail', component: BlogDetailComponent },
    { path: 'contactez-nous', component: ContactUsComponent },
  // Wildcard route for handling undefined routes
  { path: '**', component: NotFoundComponent },
/*     {path: 'reservation/:title/:model/:fuel/:year/:transmission/:price/:category' , component: ReservationComponent}
 */
{path: 'reservation' , component: ReservationComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }