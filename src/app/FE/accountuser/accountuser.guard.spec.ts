import { TestBed } from '@angular/core/testing';

import { AccountuserGuard } from './accountuser.guard';

describe('AccountuserGuard', () => {
  let guard: AccountuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccountuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
