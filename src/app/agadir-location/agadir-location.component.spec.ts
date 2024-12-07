import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgadirLocationComponent } from './agadir-location.component';

describe('AgadirLocationComponent', () => {
  let component: AgadirLocationComponent;
  let fixture: ComponentFixture<AgadirLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgadirLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgadirLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
