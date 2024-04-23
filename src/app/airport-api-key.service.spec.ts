import { TestBed } from '@angular/core/testing';

import { AirportApiKeyService } from './airport-api-key.service';

describe('AirportApiKeyService', () => {
  let service: AirportApiKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportApiKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
