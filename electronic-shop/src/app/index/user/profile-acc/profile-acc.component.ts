import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
/*import { EditProfileComponent } from './edit-profile/edit-profile.component';*/

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile-acc',
  templateUrl: './profile-acc.component.html',
  styleUrls: ['./profile-acc.component.css']
})
export class ProfileAccComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  selectedValue!: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  ngOnInit(): void {
  }

  ////Modal for Edit Profile
  //openEditProfile() {
  //  const editProfile = this.dialog.open(EditProfileComponent);

  //  editProfile.afterClosed().subscribe(result => {
  //    console.log('Dialog result');
  //  });
  //}

}
