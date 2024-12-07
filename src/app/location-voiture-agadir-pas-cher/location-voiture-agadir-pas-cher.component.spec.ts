import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureAgadirPasCherComponent } from './location-voiture-agadir-pas-cher.component';

describe('LocationVoitureAgadirPasCherComponent', () => {
  let component: LocationVoitureAgadirPasCherComponent;
  let fixture: ComponentFixture<LocationVoitureAgadirPasCherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureAgadirPasCherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureAgadirPasCherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
