import { Component, Input, OnInit } from '@angular/core';
import { MamaProfileService } from '../mama-profile.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [MamaProfileService]
})
export class EditProfileComponent implements OnInit {
  @Input() selectedMamaProfile;

  constructor(private mamaProfileService: MamaProfileService) { }

  ngOnInit() {
  }

  beginUpdatingMamaProfile(mamaProfileToUpdate){
    this.mamaProfileService.updateMamaProfile(mamaProfileToUpdate);
  }

  beginDeletingMamaProfile(mamaProfileToDelete){
   if(confirm("Are you sure you want to delete this item from the inventory?")){
     this.mamaProfileService.deleteMamaProfile(mamaProfileToDelete);
   }
 }

}
