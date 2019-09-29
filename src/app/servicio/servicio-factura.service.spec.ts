import { TestBed } from '@angular/core/testing';

import { ServicioFacturaService } from './servicio-factura.service';

describe('ServicioFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioFacturaService = TestBed.get(ServicioFacturaService);
    expect(service).toBeTruthy();
  });
});
