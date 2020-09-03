import { TestBed } from '@angular/core/testing';

import { BrandProtectionService } from './brand-protection.service';

describe('BrandProtectionService', () => {
  let service: BrandProtectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandProtectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
