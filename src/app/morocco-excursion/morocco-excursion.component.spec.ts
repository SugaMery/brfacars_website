import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoroccoExcursionComponent } from './morocco-excursion.component';

describe('MoroccoExcursionComponent', () => {
  let component: MoroccoExcursionComponent;
  let fixture: ComponentFixture<MoroccoExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoroccoExcursionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoroccoExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
