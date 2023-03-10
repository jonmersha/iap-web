import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditObjectComponent } from './audit-object.component';

describe('AuditObjectComponent', () => {
  let component: AuditObjectComponent;
  let fixture: ComponentFixture<AuditObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
