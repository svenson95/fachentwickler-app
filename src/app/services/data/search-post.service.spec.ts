import { TestBed } from '@angular/core/testing';

import { SearchPostService } from './search-post.service';

describe('SearchPostService', () => {
  let service: SearchPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
