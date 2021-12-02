import { TestBed } from '@angular/core/testing';

import { ResourceenquiryviewService } from './resourceenquiryview.service';

describe('ResourceenquiryviewService', () => {
  let service: ResourceenquiryviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceenquiryviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
