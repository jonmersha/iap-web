import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnualPlanComponent } from './create-annual-plan.component';

describe('CreateAnnualPlanComponent', () => {
  let component: CreateAnnualPlanComponent;
  let fixture: ComponentFixture<CreateAnnualPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnnualPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnnualPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
