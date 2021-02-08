import { TestBed } from '@angular/core/testing';

import { CadmusPuraPartUiService } from './cadmus-pura-part-ui.service';

describe('CadmusPuraPartUiService', () => {
  let service: CadmusPuraPartUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadmusPuraPartUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
