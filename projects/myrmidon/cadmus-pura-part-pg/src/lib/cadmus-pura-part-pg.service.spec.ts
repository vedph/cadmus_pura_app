import { TestBed } from '@angular/core/testing';

import { CadmusPuraPartPgService } from './cadmus-pura-part-pg.service';

describe('CadmusPuraPartPgService', () => {
  let service: CadmusPuraPartPgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadmusPuraPartPgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
