import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEssaouiraComponent } from './location-essaouira.component';

describe('LocationEssaouiraComponent', () => {
  let component: LocationEssaouiraComponent;
  let fixture: ComponentFixture<LocationEssaouiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationEssaouiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationEssaouiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
