import { TestBed } from '@angular/core/testing';

import { ProfileAdminGuard } from './profile-admin.guard';

describe('ProfileAdminGuard', () => {
  let guard: ProfileAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfileAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
