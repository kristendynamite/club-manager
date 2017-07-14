import { Component, OnInit } from '@angular/core';
import { MamaProfileService } from '../mama-profile.service'
import { MamaProfile } from '../mama-profile.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MamaProfileService]
})
export class AdminComponent implements OnInit {

  constructor(private MamaProfileService: MamaProfileService) { }

  ngOnInit() {
  }

  submitForm(name: string, title: string, location: string, description: string) {
    var newMamaProfile: MamaProfile = new MamaProfile(name, title, location, description);
    this.MamaProfileService.addMamaProfile(newMamaProfile);
  }

}
