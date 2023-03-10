import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDashBordComponent } from './plan-dash-bord.component';

describe('PlanDashBordComponent', () => {
  let component: PlanDashBordComponent;
  let fixture: ComponentFixture<PlanDashBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDashBordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDashBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
