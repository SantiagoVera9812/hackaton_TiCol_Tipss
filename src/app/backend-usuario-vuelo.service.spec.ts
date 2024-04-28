import { TestBed } from '@angular/core/testing';

import { BackendUsuarioVueloService } from './backend-usuario-vuelo.service';

describe('BackendUsuarioVueloService', () => {
  let service: BackendUsuarioVueloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendUsuarioVueloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
