import { TestBed } from '@angular/core/testing';

import { ServicioEquipoService } from './servicio-equipo.service';

describe('ServicioEquipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioEquipoService = TestBed.get(ServicioEquipoService);
    expect(service).toBeTruthy();
  });
});
