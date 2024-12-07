import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeVoitureAgadirComponent } from './location-de-voiture-agadir.component';

describe('LocationDeVoitureAgadirComponent', () => {
  let component: LocationDeVoitureAgadirComponent;
  let fixture: ComponentFixture<LocationDeVoitureAgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDeVoitureAgadirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDeVoitureAgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
