import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationvoitureaeroportMarrakechComponent } from './locationvoitureaeroport-marrakech.component';

describe('LocationvoitureaeroportMarrakechComponent', () => {
  let component: LocationvoitureaeroportMarrakechComponent;
  let fixture: ComponentFixture<LocationvoitureaeroportMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationvoitureaeroportMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationvoitureaeroportMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
