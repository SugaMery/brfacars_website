import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceDeLocationDeVoituresComponent } from './agence-de-location-de-voitures.component';

describe('AgenceDeLocationDeVoituresComponent', () => {
  let component: AgenceDeLocationDeVoituresComponent;
  let fixture: ComponentFixture<AgenceDeLocationDeVoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenceDeLocationDeVoituresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenceDeLocationDeVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
