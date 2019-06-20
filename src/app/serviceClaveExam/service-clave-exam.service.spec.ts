import { TestBed } from '@angular/core/testing';

import { ServiceClaveExamService } from './service-clave-exam.service';

describe('ServiceClaveExamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceClaveExamService = TestBed.get(ServiceClaveExamService);
    expect(service).toBeTruthy();
  });
});
