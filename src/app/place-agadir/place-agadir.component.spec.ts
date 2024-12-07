import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAgadirComponent } from './place-agadir.component';

describe('PlaceAgadirComponent', () => {
  let component: PlaceAgadirComponent;
  let fixture: ComponentFixture<PlaceAgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceAgadirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceAgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
