import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgadirExcursionsComponent } from './agadir-excursions.component';

describe('AgadirExcursionsComponent', () => {
  let component: AgadirExcursionsComponent;
  let fixture: ComponentFixture<AgadirExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgadirExcursionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgadirExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
