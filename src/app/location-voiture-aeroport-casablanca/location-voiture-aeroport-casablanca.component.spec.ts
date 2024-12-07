import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureAeroportCasablancaComponent } from './location-voiture-aeroport-casablanca.component';

describe('LocationVoitureAeroportCasablancaComponent', () => {
  let component: LocationVoitureAeroportCasablancaComponent;
  let fixture: ComponentFixture<LocationVoitureAeroportCasablancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureAeroportCasablancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureAeroportCasablancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
