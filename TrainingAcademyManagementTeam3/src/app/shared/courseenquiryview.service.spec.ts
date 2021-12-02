import { TestBed } from '@angular/core/testing';

import { CourseenquiryviewService } from './courseenquiryview.service';

describe('CourseenquiryviewService', () => {
  let service: CourseenquiryviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseenquiryviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
