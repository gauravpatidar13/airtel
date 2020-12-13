import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortToAirtelComponent } from './port-to-airtel.component';

describe('PortToAirtelComponent', () => {
  let component: PortToAirtelComponent;
  let fixture: ComponentFixture<PortToAirtelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortToAirtelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortToAirtelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
