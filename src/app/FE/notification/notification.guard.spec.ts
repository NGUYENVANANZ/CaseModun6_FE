import { TestBed } from '@angular/core/testing';

import { NotificationGuard } from './notification.guard';

describe('NotificationGuard', () => {
  let guard: NotificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
