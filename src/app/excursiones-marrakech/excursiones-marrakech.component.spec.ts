import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionesMarrakechComponent } from './excursiones-marrakech.component';

describe('ExcursionesMarrakechComponent', () => {
  let component: ExcursionesMarrakechComponent;
  let fixture: ComponentFixture<ExcursionesMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcursionesMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionesMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
