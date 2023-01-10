import { TestBed } from '@angular/core/testing';

import { BrowseGuard } from './browse.guard';

describe('BrowseGuard', () => {
  let guard: BrowseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BrowseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
