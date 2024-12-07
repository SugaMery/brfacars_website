import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTouristiqueMarrakechComponent } from './transport-touristique-marrakech.component';

describe('TransportTouristiqueMarrakechComponent', () => {
  let component: TransportTouristiqueMarrakechComponent;
  let fixture: ComponentFixture<TransportTouristiqueMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportTouristiqueMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportTouristiqueMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
