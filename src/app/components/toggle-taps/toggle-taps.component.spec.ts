import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTapsComponent } from './toggle-taps.component';

describe('ToggleTapsComponent', () => {
  let component: ToggleTapsComponent;
  let fixture: ComponentFixture<ToggleTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleTapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
