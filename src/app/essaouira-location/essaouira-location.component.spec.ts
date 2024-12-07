import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaouiraLocationComponent } from './essaouira-location.component';

describe('EssaouiraLocationComponent', () => {
  let component: EssaouiraLocationComponent;
  let fixture: ComponentFixture<EssaouiraLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssaouiraLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssaouiraLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
