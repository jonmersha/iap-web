import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditObjectivesComponent } from './audit-objectives.component';

describe('AuditObjectivesComponent', () => {
  let component: AuditObjectivesComponent;
  let fixture: ComponentFixture<AuditObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditObjectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
