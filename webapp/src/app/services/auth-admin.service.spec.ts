import { TestBed, inject } from '@angular/core/testing';

import { AuthAdminService } from './auth-admin.service';

describe('AuthAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAdminService]
    });
  });

  it('should ...', inject([AuthAdminService], (service: AuthAdminService) => {
    expect(service).toBeTruthy();
  }));
});
