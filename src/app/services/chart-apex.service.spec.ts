import { TestBed } from '@angular/core/testing';

import { ChartApexService } from './chart-apex.service';

describe('ChartApexService', () => {
  let service: ChartApexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartApexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
