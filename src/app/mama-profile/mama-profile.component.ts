import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MamaProfile } from '../mama-profile.model';
import { MamaProfileService } from '../mama-profile.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-mama-profile',
  templateUrl: './mama-profile.component.html',
  styleUrls: ['./mama-profile.component.css'],
  providers: [MamaProfileService]
})

export class MamaProfileComponent implements OnInit {
    profileId: string;
    mamaProfileToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private mamaProfileService: MamaProfileService) {}

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
    this.profileId = urlParameters['id'];
  });
  this.mamaProfileToDisplay = this.mamaProfileService.getMamaProfileById(this.profileId);
 }

}
