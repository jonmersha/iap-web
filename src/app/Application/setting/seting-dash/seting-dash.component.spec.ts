import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingDashComponent } from './seting-dash.component';

describe('SetingDashComponent', () => {
  let component: SetingDashComponent;
  let fixture: ComponentFixture<SetingDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetingDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
