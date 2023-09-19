import { TestBed } from '@angular/core/testing';

import { MockTableService } from './mock-table.service';

describe('MockTableService', () => {
  let service: MockTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
