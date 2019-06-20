import { TestBed } from '@angular/core/testing';

import { ServiceAlumExamAsociadoService } from './service-alum-exam-asociado.service';

describe('ServiceAlumExamAsociadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAlumExamAsociadoService = TestBed.get(ServiceAlumExamAsociadoService);
    expect(service).toBeTruthy();
  });
});
