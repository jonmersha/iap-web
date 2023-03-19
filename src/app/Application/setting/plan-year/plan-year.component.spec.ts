import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanYearComponent } from './plan-year.component';

describe('PlanYearComponent', () => {
  let component: PlanYearComponent;
  let fixture: ComponentFixture<PlanYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
