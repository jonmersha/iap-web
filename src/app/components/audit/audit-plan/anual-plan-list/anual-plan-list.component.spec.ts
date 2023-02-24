import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualPlanListComponent } from './anual-plan-list.component';

describe('AnualPlanListComponent', () => {
  let component: AnualPlanListComponent;
  let fixture: ComponentFixture<AnualPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnualPlanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
