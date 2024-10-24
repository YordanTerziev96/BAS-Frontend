import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySaleRentComponent } from './buy-sale-rent.component';

describe('BuySaleRentComponent', () => {
  let component: BuySaleRentComponent;
  let fixture: ComponentFixture<BuySaleRentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuySaleRentComponent]
    });
    fixture = TestBed.createComponent(BuySaleRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
