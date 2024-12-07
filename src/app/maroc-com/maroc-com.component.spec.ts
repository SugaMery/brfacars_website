import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarocComComponent } from './maroc-com.component';

describe('MarocComComponent', () => {
  let component: MarocComComponent;
  let fixture: ComponentFixture<MarocComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarocComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarocComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
