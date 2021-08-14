import { TestBed } from '@angular/core/testing';

import { ClientesHijosService } from './clientes-hijos.service';

describe('ClientesHijosService', () => {
  let service: ClientesHijosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesHijosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
