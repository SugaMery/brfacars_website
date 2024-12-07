import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuzoudMarrakechComponent } from './ouzoud-marrakech.component';

describe('OuzoudMarrakechComponent', () => {
  let component: OuzoudMarrakechComponent;
  let fixture: ComponentFixture<OuzoudMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuzoudMarrakechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuzoudMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
