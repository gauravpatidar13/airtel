import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeNPayBillsComponent } from './recharge-n-pay-bills.component';

describe('RechargeNPayBillsComponent', () => {
  let component: RechargeNPayBillsComponent;
  let fixture: ComponentFixture<RechargeNPayBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeNPayBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeNPayBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
