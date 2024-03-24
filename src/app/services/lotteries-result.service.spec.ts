import { TestBed } from '@angular/core/testing';

import { LotteriesResultService } from './lotteries-result.service';

describe('LotteriesResultService', () => {
  let service: LotteriesResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotteriesResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
