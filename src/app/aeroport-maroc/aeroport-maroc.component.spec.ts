import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroportMarocComponent } from './aeroport-maroc.component';

describe('AeroportMarocComponent', () => {
  let component: AeroportMarocComponent;
  let fixture: ComponentFixture<AeroportMarocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeroportMarocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeroportMarocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
