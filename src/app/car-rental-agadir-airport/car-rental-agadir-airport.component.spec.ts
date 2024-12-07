import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalAgadirAirportComponent } from './car-rental-agadir-airport.component';

describe('CarRentalAgadirAirportComponent', () => {
  let component: CarRentalAgadirAirportComponent;
  let fixture: ComponentFixture<CarRentalAgadirAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalAgadirAirportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalAgadirAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
