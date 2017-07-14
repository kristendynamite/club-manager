import { Component, OnInit } from '@angular/core';
import { MamaProfile } from '../mama-profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  constructor(private router: Router){}

  mamaprofiles: MamaProfile[] = [
   new MamaProfile("Xena", "Aerial Silks Dancer", "SE",
       "Always down to grab a yoga class and kombucha.", 1),
   new MamaProfile("Amy", "Stay-at-home mama of two", "NE / Kenton",
       "Love meeting up with other mamas at the library, park, and activity center.", 2),
 ];

 goToDetailPage(clickedMamaProfile: MamaProfile) {
     this.router.navigate(['mamaprofile', clickedMamaProfile.id]);
   };


  ngOnInit() {
  }

}
