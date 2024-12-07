import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureAgadirComponent } from './location-voiture-agadir.component';

describe('LocationVoitureAgadirComponent', () => {
  let component: LocationVoitureAgadirComponent;
  let fixture: ComponentFixture<LocationVoitureAgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureAgadirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureAgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
