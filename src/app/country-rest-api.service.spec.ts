import { TestBed } from '@angular/core/testing';

import { CountryRestApiService } from './country-rest-api.service';

describe('CountryRestApiService', () => {
  let service: CountryRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
