import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepannageMarrakechComponent } from './depannage-marrakech.component';

describe('DepannageMarrakechComponent', () => {
  let component: DepannageMarrakechComponent;
  let fixture: ComponentFixture<DepannageMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepannageMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepannageMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
