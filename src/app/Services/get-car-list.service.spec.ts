/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetCarListService } from './get-car-list.service';

describe('GetCarListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCarListService]
    });
  });

  it('should ...', inject([GetCarListService], (service: GetCarListService) => {
    expect(service).toBeTruthy();
  }));
});
