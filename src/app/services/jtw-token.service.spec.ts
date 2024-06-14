import { TestBed } from '@angular/core/testing';

import { JwtTokenService } from './jwt-token.service';

describe('LocalStorageService', () => {
  let service: JwtTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
