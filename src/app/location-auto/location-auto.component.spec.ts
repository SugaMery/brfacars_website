import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAutoComponent } from './location-auto.component';

describe('LocationAutoComponent', () => {
  let component: LocationAutoComponent;
  let fixture: ComponentFixture<LocationAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
