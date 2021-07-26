import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';


@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //Modal for Add Address
  openAddAddress() {
    const addAddress = this.dialog.open(AddAddressComponent);

    addAddress.afterClosed().subscribe(result => {
      console.log('Dialog result');
    });
  }


  //Modal for Edit Addresses
  openEditAddress() {
    const editAddress = this.dialog.open(EditAddressComponent);

    editAddress.afterClosed().subscribe(result => {
      console.log('Dialog result');
    });
  }


}
