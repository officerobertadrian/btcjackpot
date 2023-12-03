import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawInfoComponent } from './draw-info.component';

describe('DrawInfoComponent', () => {
  let component: DrawInfoComponent;
  let fixture: ComponentFixture<DrawInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawInfoComponent]
    });
    fixture = TestBed.createComponent(DrawInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
