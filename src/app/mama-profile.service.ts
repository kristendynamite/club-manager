import { Injectable } from '@angular/core';
import { MamaProfile } from './mama-profile.model';
import { MAMAPROFILES } from './mock-profiles';

@Injectable()
export class MamaProfileService {

  constructor() { }

  getMamaProfiles() {
    return MAMAPROFILES;
  }

  getMamaProfileById(mamaProfileId: number){
    for (var i = 0; i <= MAMAPROFILES.length - 1; i++) {
      if (MAMAPROFILES[i].id === mamaProfileId) {
        return MAMAPROFILES[i];
      }
    }
  }

}
