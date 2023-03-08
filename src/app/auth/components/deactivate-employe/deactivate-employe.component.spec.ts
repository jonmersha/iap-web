import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateEmployeComponent } from './deactivate-employe.component';

describe('DeactivateEmployeComponent', () => {
  let component: DeactivateEmployeComponent;
  let fixture: ComponentFixture<DeactivateEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateEmployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactivateEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
