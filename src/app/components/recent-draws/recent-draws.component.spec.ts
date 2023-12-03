import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDrawsComponent } from './recent-draws.component';

describe('RecentDrawsComponent', () => {
  let component: RecentDrawsComponent;
  let fixture: ComponentFixture<RecentDrawsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentDrawsComponent]
    });
    fixture = TestBed.createComponent(RecentDrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
