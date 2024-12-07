import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureMarrakechPasCherComponent } from './location-voiture-marrakech-pas-cher.component';

describe('LocationVoitureMarrakechPasCherComponent', () => {
  let component: LocationVoitureMarrakechPasCherComponent;
  let fixture: ComponentFixture<LocationVoitureMarrakechPasCherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureMarrakechPasCherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureMarrakechPasCherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
