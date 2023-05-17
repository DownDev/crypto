import { TestBed } from '@angular/core/testing';

import { ShowSearchBarGuard } from './show-search-bar.guard';

describe('ShowSearchBarGuard', () => {
  let guard: ShowSearchBarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShowSearchBarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
