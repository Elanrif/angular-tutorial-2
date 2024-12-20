import { TestBed } from '@angular/core/testing';

import { PetRosterService } from './pet-roster.service';

describe('PetRosterService', () => {
  let service: PetRosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetRosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
