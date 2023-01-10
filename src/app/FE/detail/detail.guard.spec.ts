import { TestBed } from '@angular/core/testing';

import { DetailGuard } from './detail.guard';

describe('DetailGuard', () => {
  let guard: DetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
