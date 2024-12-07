import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgadirToursComponent } from './agadir-tours.component';

describe('AgadirToursComponent', () => {
  let component: AgadirToursComponent;
  let fixture: ComponentFixture<AgadirToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgadirToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgadirToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
