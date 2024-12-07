import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalMoroccoCasablancaAirportComponent } from './car-rental-morocco-casablanca-airport.component';

describe('CarRentalMoroccoCasablancaAirportComponent', () => {
  let component: CarRentalMoroccoCasablancaAirportComponent;
  let fixture: ComponentFixture<CarRentalMoroccoCasablancaAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalMoroccoCasablancaAirportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalMoroccoCasablancaAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
