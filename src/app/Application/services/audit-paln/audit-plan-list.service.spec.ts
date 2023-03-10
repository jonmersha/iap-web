import { TestBed } from '@angular/core/testing';

import { AuditPlanListService } from './audit-plan-list.service';

describe('AuditPlanListService', () => {
  let service: AuditPlanListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditPlanListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
