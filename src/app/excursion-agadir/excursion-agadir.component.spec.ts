import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionAgadirComponent } from './excursion-agadir.component';

describe('ExcursionAgadirComponent', () => {
  let component: ExcursionAgadirComponent;
  let fixture: ComponentFixture<ExcursionAgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcursionAgadirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionAgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
