import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeVoitureMarocComponent } from './location-de-voiture-maroc.component';

describe('LocationDeVoitureMarocComponent', () => {
  let component: LocationDeVoitureMarocComponent;
  let fixture: ComponentFixture<LocationDeVoitureMarocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDeVoitureMarocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDeVoitureMarocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
