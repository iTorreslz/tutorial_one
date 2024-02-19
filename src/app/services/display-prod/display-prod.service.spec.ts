import { TestBed } from '@angular/core/testing';

import { DisplayProdService } from './display-prod.service';

describe('DisplayProdService', () => {
  let service: DisplayProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
