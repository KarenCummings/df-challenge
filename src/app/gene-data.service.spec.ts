/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneDataService } from './gene-data.service';

describe('GeneDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneDataService]
    });
  });

  it('should ...', inject([GeneDataService], (service: GeneDataService) => {
    expect(service).toBeTruthy();
  }));
});
