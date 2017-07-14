import { TestBed, inject } from '@angular/core/testing';

import { MamaProfileService } from './mama-profile.service';

describe('MamaProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MamaProfileService]
    });
  });

  it('should be created', inject([MamaProfileService], (service: MamaProfileService) => {
    expect(service).toBeTruthy();
  }));
});
