import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

export interface cartTable {
  cart_no: string;
  cart_id: string;
  user_id: string;
  prod_id: string;
  prod_quantity: string;
  cart_status: string;
  cart_total: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public data : DataService,) { }

  ngOnInit(): void {

    this.getUser();
    this.pullAllCart();
  }

  //USER NAME
  user: any;

  getUser() {
    this.user = localStorage.getItem('Name');
  }

  cartInfoTable: cartTable[] = [];

  //PULL CART

  pullAllCart() {
    this.data.sendApiRequest("pullAllCart", null).subscribe((data: any) => {
      this.cartInfoTable = data.payload;
      console.log(this.cartInfoTable + ' From Shop Page: Method pullAllProd');
      this.filterCart();
    });
  }

  badgeNoti: any;
  filteredCartTableInfo: cartTable[] = []

  filterCart() {
    for (let cartInfoTable of this.cartInfoTable) {
      if (cartInfoTable.cart_id === this.user) {
        if (cartInfoTable.cart_status === 'true') {
          console.log('matched')
          this.filteredCartTableInfo.push(cartInfoTable)
          console.log(this.filteredCartTableInfo)
        }
      }
    }

    this.cartInfoTable = this.filteredCartTableInfo;
    this.badgeNoti = this.cartInfoTable.length
    console.log(this.badgeNoti);
  }


}
