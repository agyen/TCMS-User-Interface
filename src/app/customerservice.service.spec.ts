import { TestBed } from '@angular/core/testing';

import { CustomerserviceService } from './customers/customerservice.service';

describe('CustomerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerserviceService = TestBed.get(CustomerserviceService);
    expect(service).toBeTruthy();
  });
});
