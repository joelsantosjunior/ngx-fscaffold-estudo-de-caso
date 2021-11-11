import { TestBed } from '@angular/core/testing';

import { WcLoadExternalService } from './wc-load-external.service';

describe('WcLoadExternalService', () => {
  let service: WcLoadExternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcLoadExternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
