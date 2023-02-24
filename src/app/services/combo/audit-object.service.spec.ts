import { TestBed } from '@angular/core/testing';

import { AuditObjectService } from './audit-object.service';

describe('AuditObjectService', () => {
  let service: AuditObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
