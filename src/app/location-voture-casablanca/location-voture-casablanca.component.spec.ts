import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVotureCasablancaComponent } from './location-voture-casablanca.component';

describe('LocationVotureCasablancaComponent', () => {
  let component: LocationVotureCasablancaComponent;
  let fixture: ComponentFixture<LocationVotureCasablancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVotureCasablancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVotureCasablancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
