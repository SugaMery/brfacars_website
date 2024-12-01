import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeVoitureMarrakechComponent } from './location-de-voiture-marrakech.component';

describe('LocationDeVoitureMarrakechComponent', () => {
  let component: LocationDeVoitureMarrakechComponent;
  let fixture: ComponentFixture<LocationDeVoitureMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDeVoitureMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDeVoitureMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
