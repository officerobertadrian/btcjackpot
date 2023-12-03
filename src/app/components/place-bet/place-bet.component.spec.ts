import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceBetComponent } from './place-bet.component';

describe('PlaceBetComponent', () => {
  let component: PlaceBetComponent;
  let fixture: ComponentFixture<PlaceBetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceBetComponent]
    });
    fixture = TestBed.createComponent(PlaceBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
