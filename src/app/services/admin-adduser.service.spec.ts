import { TestBed } from '@angular/core/testing';

import { AdminAdduserService } from './admin-adduser.service';

describe('AdminAdduserService', () => {
  let service: AdminAdduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAdduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
