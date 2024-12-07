import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalMoroccoComponent } from './car-rental-morocco.component';

describe('CarRentalMoroccoComponent', () => {
  let component: CarRentalMoroccoComponent;
  let fixture: ComponentFixture<CarRentalMoroccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalMoroccoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalMoroccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
