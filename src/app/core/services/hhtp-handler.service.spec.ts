import { TestBed } from '@angular/core/testing';

import { HhtpHandlerService } from './hhtp-handler.service';

describe('HhtpHandlerService', () => {
  let service: HhtpHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HhtpHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
