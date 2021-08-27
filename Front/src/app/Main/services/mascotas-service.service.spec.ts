import { TestBed } from '@angular/core/testing';

import { MascotasServiceService } from './mascotas-service.service';

describe('MascotasServiceService', () => {
  let service: MascotasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
