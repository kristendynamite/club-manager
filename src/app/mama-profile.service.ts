import { Injectable } from '@angular/core';
import { MamaProfile } from './mama-profile.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MamaProfileService {
  profiles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('profiles');
  }

  getMamaProfiles() {
    return this.profiles;
  }

  addMamaProfile(newMamaProfile: MamaProfile) {
    this.profiles.push(newMamaProfile);
  }

  // getMamaProfileById(mamaProfileId: number){
  //   for (var i = 0; i <= MAMAPROFILES.length - 1; i++) {
  //     if (MAMAPROFILES[i].id === mamaProfileId) {
  //       return MAMAPROFILES[i];
  //     }
  //   }
  // }

}
