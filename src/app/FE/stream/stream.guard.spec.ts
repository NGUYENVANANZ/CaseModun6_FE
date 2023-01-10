import { TestBed } from '@angular/core/testing';

import { StreamGuard } from './stream.guard';

describe('StreamGuard', () => {
  let guard: StreamGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StreamGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
