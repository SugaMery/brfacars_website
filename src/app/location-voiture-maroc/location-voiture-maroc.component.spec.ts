import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureMarocComponent } from './location-voiture-maroc.component';

describe('LocationVoitureMarocComponent', () => {
  let component: LocationVoitureMarocComponent;
  let fixture: ComponentFixture<LocationVoitureMarocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureMarocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureMarocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
