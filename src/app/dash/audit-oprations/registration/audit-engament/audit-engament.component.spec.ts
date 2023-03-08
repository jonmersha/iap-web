import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditEngamentComponent } from './audit-engament.component';

describe('AuditEngamentComponent', () => {
  let component: AuditEngamentComponent;
  let fixture: ComponentFixture<AuditEngamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditEngamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditEngamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
