import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureMarrakechComponent } from './location-voiture-marrakech.component';

describe('LocationVoitureMarrakechComponent', () => {
  let component: LocationVoitureMarrakechComponent;
  let fixture: ComponentFixture<LocationVoitureMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
