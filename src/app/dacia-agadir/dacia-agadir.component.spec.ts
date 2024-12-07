import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaciaAgadirComponent } from './dacia-agadir.component';

describe('DaciaAgadirComponent', () => {
  let component: DaciaAgadirComponent;
  let fixture: ComponentFixture<DaciaAgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaciaAgadirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaciaAgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
