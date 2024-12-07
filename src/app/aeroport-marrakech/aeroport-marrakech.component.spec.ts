import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroportMarrakechComponent } from './aeroport-marrakech.component';

describe('AeroportMarrakechComponent', () => {
  let component: AeroportMarrakechComponent;
  let fixture: ComponentFixture<AeroportMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeroportMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeroportMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
