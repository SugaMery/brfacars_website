import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalCasablancaAirportComponent } from './car-rental-casablanca-airport.component';

describe('CarRentalCasablancaAirportComponent', () => {
  let component: CarRentalCasablancaAirportComponent;
  let fixture: ComponentFixture<CarRentalCasablancaAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalCasablancaAirportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalCasablancaAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
