import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalEssaouiraComponent } from './car-rental-essaouira.component';

describe('CarRentalEssaouiraComponent', () => {
  let component: CarRentalEssaouiraComponent;
  let fixture: ComponentFixture<CarRentalEssaouiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalEssaouiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalEssaouiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
