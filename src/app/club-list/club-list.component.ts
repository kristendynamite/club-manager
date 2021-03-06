import { Component, OnInit } from '@angular/core';
import { MamaProfile } from '../mama-profile.model';
import { Router } from '@angular/router';
import { MamaProfileService } from '../mama-profile.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css'],
  providers: [MamaProfileService]
})

export class ClubListComponent implements OnInit {
  mamaprofiles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private mamaProfileService: MamaProfileService){}

  ngOnInit() {
    this.mamaprofiles = this.mamaProfileService.getMamaProfiles();
  }

  goToDetailPage(clickedMamaProfile) {
  this.router.navigate(['club-list', clickedMamaProfile.$key]);
};

}
