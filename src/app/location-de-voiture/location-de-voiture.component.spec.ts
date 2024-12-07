import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeVoitureComponent } from './location-de-voiture.component';

describe('LocationDeVoitureComponent', () => {
  let component: LocationDeVoitureComponent;
  let fixture: ComponentFixture<LocationDeVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDeVoitureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDeVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
