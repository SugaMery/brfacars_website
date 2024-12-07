import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureEssaouiraComponent } from './location-voiture-essaouira.component';

describe('LocationVoitureEssaouiraComponent', () => {
  let component: LocationVoitureEssaouiraComponent;
  let fixture: ComponentFixture<LocationVoitureEssaouiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureEssaouiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureEssaouiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
