import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalAgadirComponent } from './car-rental-agadir.component';

describe('CarRentalAgadirComponent', () => {
  let component: CarRentalAgadirComponent;
  let fixture: ComponentFixture<CarRentalAgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalAgadirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalAgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
