import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualPlanComponent } from './anual-plan.component';

describe('AnualPlanComponent', () => {
  let component: AnualPlanComponent;
  let fixture: ComponentFixture<AnualPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnualPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
