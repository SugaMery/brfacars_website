import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureACasablancaComponent } from './location-voiture-a-casablanca.component';

describe('LocationVoitureACasablancaComponent', () => {
  let component: LocationVoitureACasablancaComponent;
  let fixture: ComponentFixture<LocationVoitureACasablancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoitureACasablancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoitureACasablancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
