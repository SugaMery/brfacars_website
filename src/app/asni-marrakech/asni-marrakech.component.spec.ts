import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsniMarrakechComponent } from './asni-marrakech.component';

describe('AsniMarrakechComponent', () => {
  let component: AsniMarrakechComponent;
  let fixture: ComponentFixture<AsniMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsniMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsniMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
