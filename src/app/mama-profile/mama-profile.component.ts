import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MamaProfile } from '../mama-profile.model';


@Component({
  selector: 'app-mama-profile',
  templateUrl: './mama-profile.component.html',
  styleUrls: ['./mama-profile.component.css']
})
export class MamaProfileComponent implements OnInit {
  mamaProfileId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.mamaProfileId = parseInt(urlParameters['id']);
    });
  }

}
