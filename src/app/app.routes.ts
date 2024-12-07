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
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LocationvoitureaeroportMarrakechComponent } from './locationvoitureaeroport-marrakech/locationvoitureaeroport-marrakech.component';
import { LocationDeVoitureMarrakechComponent } from './location-de-voiture-marrakech/location-de-voiture-marrakech.component';
import { AeroportAgadirComponent } from './aeroport-agadir/aeroport-agadir.component';
import { AeroportMarocComponent } from './aeroport-maroc/aeroport-maroc.component';
import { AeroportMarrakechComponent } from './aeroport-marrakech/aeroport-marrakech.component';
import { AgadirExcursionsComponent } from './agadir-excursions/agadir-excursions.component';
import { AgadirLocationComponent } from './agadir-location/agadir-location.component';
import { AgadirToursComponent } from './agadir-tours/agadir-tours.component';
import { AgenceDeLocationDeVoituresComponent } from './agence-de-location-de-voitures/agence-de-location-de-voitures.component';
import { AsniComponent } from './asni/asni.component';
import { AsniMarrakechComponent } from './asni-marrakech/asni-marrakech.component';
import { CarRentalAgadirComponent } from './car-rental-agadir/car-rental-agadir.component';
import { CarRentalAgadirAirportComponent } from './car-rental-agadir-airport/car-rental-agadir-airport.component';
import { CarRentalCasablancaAirportComponent } from './car-rental-casablanca-airport/car-rental-casablanca-airport.component';
import { CarRentalEssaouiraComponent } from './car-rental-essaouira/car-rental-essaouira.component';
import { CarRentalMarrakechAirportComponent } from './car-rental-marrakech-airport/car-rental-marrakech-airport.component';
import { CarRentalMoroccoComponent } from './car-rental-morocco/car-rental-morocco.component';
import { CarRentalMoroccoCasablancaAirportComponent } from './car-rental-morocco-casablanca-airport/car-rental-morocco-casablanca-airport.component';
import { DaciaAgadirComponent } from './dacia-agadir/dacia-agadir.component';
import { DepannageMarrakechComponent } from './depannage-marrakech/depannage-marrakech.component';
import { EssaouiraLocationComponent } from './essaouira-location/essaouira-location.component';
import { ExcursionAgadirComponent } from './excursion-agadir/excursion-agadir.component';
import { ExcursionEssaouiraComponent } from './excursion-essaouira/excursion-essaouira.component';
import { ExcursionesMarrakechComponent } from './excursiones-marrakech/excursiones-marrakech.component';
import { LocationComponent } from './location/location.component';
import { LocationAgadirComponent } from './location-agadir/location-agadir.component';
import { LocationAutoComponent } from './location-auto/location-auto.component';
import { LocationDeVoitureComponent } from './location-de-voiture/location-de-voiture.component';
import { LocationDeVoitureAgadirComponent } from './location-de-voiture-agadir/location-de-voiture-agadir.component';
import { LocationDeVoitureEssaouiraComponent } from './location-de-voiture-essaouira/location-de-voiture-essaouira.component';
import { LocationDeVoitureMarocComponent } from './location-de-voiture-maroc/location-de-voiture-maroc.component';
import { LocationEssaouiraComponent } from './location-essaouira/location-essaouira.component';
import { LocationMarrakechComponent } from './location-marrakech/location-marrakech.component';
import { LocationVoitureACasablancaComponent } from './location-voiture-a-casablanca/location-voiture-a-casablanca.component';
import { LocationVoitureAeroportCasablancaComponent } from './location-voiture-aeroport-casablanca/location-voiture-aeroport-casablanca.component';
import { LocationVoitureAgadirComponent } from './location-voiture-agadir/location-voiture-agadir.component';
import { LocationVoitureAgadirPasCherComponent } from './location-voiture-agadir-pas-cher/location-voiture-agadir-pas-cher.component';
import { LocationVoitureCasablancaAeroportComponent } from './location-voiture-casablanca-aeroport/location-voiture-casablanca-aeroport.component';
import { LocationVoitureEssaouiraComponent } from './location-voiture-essaouira/location-voiture-essaouira.component';
import { LocationVoitureMarocComponent } from './location-voiture-maroc/location-voiture-maroc.component';
import { LocationVoitureMarrakechComponent } from './location-voiture-marrakech/location-voiture-marrakech.component';
import { LocationVoitureMarrakechPasCherComponent } from './location-voiture-marrakech-pas-cher/location-voiture-marrakech-pas-cher.component';
import { LocationVoitureOuarzazateComponent } from './location-voiture-ouarzazate/location-voiture-ouarzazate.component';
import { LocationVotureCasablancaComponent } from './location-voture-casablanca/location-voture-casablanca.component';
import { MarocComComponent } from './maroc-com/maroc-com.component';
import { MarocLocationComponent } from './maroc-location/maroc-location.component';
import { MoroccoExcursionComponent } from './morocco-excursion/morocco-excursion.component';
import { MoroccoExcursionsComponent } from './morocco-excursions/morocco-excursions.component';
import { OuzoudMarrakechComponent } from './ouzoud-marrakech/ouzoud-marrakech.component';
import { PlaceAgadirComponent } from './place-agadir/place-agadir.component';
import { TransportTouristiqueMarrakechComponent } from './transport-touristique-marrakech/transport-touristique-marrakech.component';

export const  routes: Routes = [
    { path: '', component: HomeComponent ,data: { title: 'Home' }},
    { path: 'contact', component: ReservationComponent, data: { title: 'Contact Us' } },
    {path: 'voitures' , component: CarsListComponent},
    {path: 'apropos-de-nous' , component: AboutUsComponent},
    {path: 'service' , component: ServicesComponent},
    {path: 'blogs' , component: BlogsComponent},
    { path: 'blog-detail', component: BlogDetailComponent },
    { path: 'blog-detail/:id/:titre', component: BlogDetailComponent },
    { path: 'location-voiture-aeroport-marrakech-guide-complet', component: LocationvoitureaeroportMarrakechComponent },
    { path: 'aeroport-agadir', component: AeroportAgadirComponent },
    { path: 'aeroport-maroc', component: AeroportMarocComponent },
    { path: 'aeroport-marrakech', component: AeroportMarrakechComponent },
    { path: 'excursions-agadir', component: AgadirExcursionsComponent },
    { path: 'location-agadir', component: AgadirLocationComponent },
    { path: 'tours-agadir', component: AgadirToursComponent },
    { path: 'agence-location-voitures', component: AgenceDeLocationDeVoituresComponent },
    { path: 'asni', component: AsniComponent },
    { path: 'asni-marrakech', component: AsniMarrakechComponent },
    { path: 'car-rental-agadir', component: CarRentalAgadirComponent },
    { path: 'car-rental-agadir-airport', component: CarRentalAgadirAirportComponent },
    { path: 'car-rental-casablanca-airport', component: CarRentalCasablancaAirportComponent },
    { path: 'car-rental-essaouira', component: CarRentalEssaouiraComponent },
    { path: 'car-rental-marrakech-airport', component: CarRentalMarrakechAirportComponent },
    { path: 'car-rental-morocco', component: CarRentalMoroccoComponent },
    { path: 'car-rental-morocco-casablanca-airport', component: CarRentalMoroccoCasablancaAirportComponent },
    { path: 'dacia-agadir', component: DaciaAgadirComponent },
    { path: 'depannage-marrakech', component: DepannageMarrakechComponent },
    { path: 'location-essaouira', component: EssaouiraLocationComponent },
    { path: 'excursion-agadir', component: ExcursionAgadirComponent },
    { path: 'excursion-essaouira', component: ExcursionEssaouiraComponent },
    { path: 'excursiones-marrakech', component: ExcursionesMarrakechComponent },
    { path: 'location', component: LocationComponent },
    { path: 'location-agadir', component: LocationAgadirComponent },
    { path: 'location-auto', component: LocationAutoComponent },
    { path: 'location-voiture', component: LocationDeVoitureComponent },
    { path: 'location-voiture-agadir', component: LocationDeVoitureAgadirComponent },
    { path: 'location-voiture-essaouira', component: LocationDeVoitureEssaouiraComponent },
    { path: 'location-voiture-maroc', component: LocationDeVoitureMarocComponent },
    { path: 'location-essaouira', component: LocationEssaouiraComponent },
    { path: 'location-marrakech', component: LocationMarrakechComponent },
    { path: 'location-voiture-casablanca', component: LocationVoitureACasablancaComponent },
    { path: 'location-voiture-casablanca-aeroport', component: LocationVoitureAeroportCasablancaComponent },
    { path: 'location-voiture-agadir', component: LocationVoitureAgadirComponent },
    { path: 'location-voiture-agadir-pas-cher', component: LocationVoitureAgadirPasCherComponent },
    { path: 'location-voiture-casablanca-aeroport', component: LocationVoitureCasablancaAeroportComponent },
    { path: 'location-voiture-essaouira', component: LocationVoitureEssaouiraComponent },
    { path: 'location-voiture-maroc', component: LocationVoitureMarocComponent },
    { path: 'location-voiture-marrakech', component: LocationVoitureMarrakechComponent },
    { path: 'location-voiture-marrakech-pas-cher', component: LocationVoitureMarrakechPasCherComponent },
    { path: 'location-voiture-ouarzazate', component: LocationVoitureOuarzazateComponent },
    { path: 'location-voiture-casablanca', component: LocationVotureCasablancaComponent },
    { path: 'maroc-com', component: MarocComComponent },
    { path: 'maroc-location', component: MarocLocationComponent },
    { path: 'morocco-excursion', component: MoroccoExcursionComponent },
    { path: 'morocco-excursions', component: MoroccoExcursionsComponent },
    { path: 'ouzoud-marrakech', component: OuzoudMarrakechComponent },
    { path: 'place-agadir', component: PlaceAgadirComponent },
    { path: 'transport-touristique-marrakech', component: TransportTouristiqueMarrakechComponent },
    { path: 'location-de-voiture-a-marrakech', component: LocationDeVoitureMarrakechComponent },
    { path: 'contactez-nous', component: ContactUsComponent },
  // Wildcard route for handling undefined routes
  { path: '**', component: NotFoundComponent },
/*     {path: 'reservation/:title/:model/:fuel/:year/:transmission/:price/:category' , component: ReservationComponent}
 */
{path: 'reservation' , component: ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }