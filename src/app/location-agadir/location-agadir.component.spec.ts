import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAgadirComponent } from './location-agadir.component';

describe('LocationAgadirComponent', () => {
  let component: LocationAgadirComponent;
  let fixture: ComponentFixture<LocationAgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationAgadirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
