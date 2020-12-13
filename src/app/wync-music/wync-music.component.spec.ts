import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyncMusicComponent } from './wync-music.component';

describe('WyncMusicComponent', () => {
  let component: WyncMusicComponent;
  let fixture: ComponentFixture<WyncMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyncMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WyncMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
