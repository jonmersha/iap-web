import { TestBed } from '@angular/core/testing';

import { AuditYearService } from './audit-year.service';

describe('AuditYearService', () => {
  let service: AuditYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
