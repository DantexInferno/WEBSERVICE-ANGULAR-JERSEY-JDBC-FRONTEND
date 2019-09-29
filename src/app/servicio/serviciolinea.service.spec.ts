import { TestBed } from '@angular/core/testing';

import { ServiciolineaService } from './serviciolinea.service';

describe('ServiciolineaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciolineaService = TestBed.get(ServiciolineaService);
    expect(service).toBeTruthy();
  });
});
