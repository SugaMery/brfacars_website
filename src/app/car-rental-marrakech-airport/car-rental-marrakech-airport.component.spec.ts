import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalMarrakechAirportComponent } from './car-rental-marrakech-airport.component';

describe('CarRentalMarrakechAirportComponent', () => {
  let component: CarRentalMarrakechAirportComponent;
  let fixture: ComponentFixture<CarRentalMarrakechAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalMarrakechAirportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalMarrakechAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
