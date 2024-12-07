import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMarrakechComponent } from './location-marrakech.component';

describe('LocationMarrakechComponent', () => {
  let component: LocationMarrakechComponent;
  let fixture: ComponentFixture<LocationMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
