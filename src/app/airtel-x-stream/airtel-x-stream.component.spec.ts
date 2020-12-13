import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtelXStreamComponent } from './airtel-x-stream.component';

describe('AirtelXStreamComponent', () => {
  let component: AirtelXStreamComponent;
  let fixture: ComponentFixture<AirtelXStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirtelXStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtelXStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
