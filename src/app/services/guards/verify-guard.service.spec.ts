import { TestBed } from '@angular/core/testing';

import { VerifyGuardService } from './verify-guard.service';

describe('VerifyGuardService', () => {
  let service: VerifyGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
