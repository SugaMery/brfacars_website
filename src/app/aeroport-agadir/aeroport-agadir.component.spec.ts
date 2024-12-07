import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroportAgadirComponent } from './aeroport-agadir.component';

describe('AeroportAgadirComponent', () => {
  let component: AeroportAgadirComponent;
  let fixture: ComponentFixture<AeroportAgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeroportAgadirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeroportAgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
