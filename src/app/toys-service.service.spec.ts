import { TestBed } from '@angular/core/testing';

import { ToysServiceService } from './toys-service.service';

describe('ToysServiceService', () => {
  let service: ToysServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToysServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
