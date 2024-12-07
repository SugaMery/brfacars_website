import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeVoitureEssaouiraComponent } from './location-de-voiture-essaouira.component';

describe('LocationDeVoitureEssaouiraComponent', () => {
  let component: LocationDeVoitureEssaouiraComponent;
  let fixture: ComponentFixture<LocationDeVoitureEssaouiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDeVoitureEssaouiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDeVoitureEssaouiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
