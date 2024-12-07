import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureCasablancaAeroportComponent } from './location-voiture-casablanca-aeroport.component';

describe('LocationVoitureCasablancaAeroportComponent', () => {
  let component: LocationVoitureCasablancaAeroportComponent;
  let fixture: ComponentFixture<LocationVoitureCasablancaAeroportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureCasablancaAeroportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureCasablancaAeroportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
