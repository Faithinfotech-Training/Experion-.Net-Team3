import { TestBed } from '@angular/core/testing';

import { TraineeviewService } from './traineeview.service';

describe('TraineeviewService', () => {
  let service: TraineeviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineeviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
