import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAnualPlanComponent } from './upload-anual-plan.component';

describe('UploadAnualPlanComponent', () => {
  let component: UploadAnualPlanComponent;
  let fixture: ComponentFixture<UploadAnualPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAnualPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAnualPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
