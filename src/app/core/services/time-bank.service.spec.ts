import { TestBed } from '@angular/core/testing';

import { TimeBankService } from './time-bank.service';

describe('TimeBankService', () => {
  let service: TimeBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
