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

  getMamaProfileById(mamaprofileId: string){
    return this.database.object('profiles/' + mamaprofileId);
  }

  updateMamaProfile(localUpdatedMamaProfile){
    var profileEntryInFirebase = this.getMamaProfileById(localUpdatedMamaProfile.$key);
    profileEntryInFirebase.update({name: localUpdatedMamaProfile.name,
                                title: localUpdatedMamaProfile.title,
                                location: localUpdatedMamaProfile.location,
                                description: localUpdatedMamaProfile.description});
  }

}
