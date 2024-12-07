import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsniComponent } from './asni.component';

describe('AsniComponent', () => {
  let component: AsniComponent;
  let fixture: ComponentFixture<AsniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
