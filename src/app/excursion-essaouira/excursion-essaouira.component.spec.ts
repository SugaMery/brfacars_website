import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionEssaouiraComponent } from './excursion-essaouira.component';

describe('ExcursionEssaouiraComponent', () => {
  let component: ExcursionEssaouiraComponent;
  let fixture: ComponentFixture<ExcursionEssaouiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcursionEssaouiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionEssaouiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
