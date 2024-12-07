import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarocLocationComponent } from './maroc-location.component';

describe('MarocLocationComponent', () => {
  let component: MarocLocationComponent;
  let fixture: ComponentFixture<MarocLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarocLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarocLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
