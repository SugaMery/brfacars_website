import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalMarrakechComponent } from './car-rental-marrakech.component';

describe('CarRentalMarrakechComponent', () => {
  let component: CarRentalMarrakechComponent;
  let fixture: ComponentFixture<CarRentalMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
