import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureOuarzazateComponent } from './location-voiture-ouarzazate.component';

describe('LocationVoitureOuarzazateComponent', () => {
  let component: LocationVoitureOuarzazateComponent;
  let fixture: ComponentFixture<LocationVoitureOuarzazateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureOuarzazateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureOuarzazateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
