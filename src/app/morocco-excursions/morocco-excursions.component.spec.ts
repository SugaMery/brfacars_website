import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoroccoExcursionsComponent } from './morocco-excursions.component';

describe('MoroccoExcursionsComponent', () => {
  let component: MoroccoExcursionsComponent;
  let fixture: ComponentFixture<MoroccoExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoroccoExcursionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoroccoExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
