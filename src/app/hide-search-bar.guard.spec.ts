import { TestBed } from '@angular/core/testing';

import { HideSearchBarGuard } from './hide-search-bar.guard';

describe('HideSearchBarGuard', () => {
  let guard: HideSearchBarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HideSearchBarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
