import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


export interface prodTable {
  prod_no: string;
  prod_id: string;
  prod_name: string;
  prod_price: string;
  prod_quantity: string;
  prod_desc: string;
  prod_category: string;
  prod_image: string;
}

export interface cartTable {
  cart_no: string;
  cart_id: string;
  user_id: string;
  prod_id: string;
  prod_quantity: string;
  cart_status: string;
  cart_total: number;
}

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(private data: DataService, private _snackBar: MatSnackBar, public route: Router) { }

  ngOnInit(): void {
    this.getUser();
    this.pullAllProd();
    this.pullAllCart();
  }

  //USER NAME
  user: any;

  getUser() {
    this.user = localStorage.getItem('Name');

  }

  //PULL PRODUCTS

  prodInfoTable: prodTable[] = [];

  pullAllProd() {
    this.data.sendApiRequest("pullAllProd", null).subscribe((data: any) => {
      this.prodInfoTable = data.payload;
      console.log(this.prodInfoTable + ' From Shop Page: Method pullAllProd');
    });
    console.log(this.prodInfoTable + ' From Shop Page: Method pullAllProd');
  }

  cartInfoTable: cartTable[] = [];

  //GET PRODUCT DETAILS

  getProdName(prod_id: any) {
    var prod_name
    console.log(prod_id)
    for (let prodInfoTable of this.prodInfoTable) {
      if (prod_id == prodInfoTable.prod_id) {
        console.log('match +++++++++++++++++')
        prod_name = prodInfoTable.prod_name
      }      
    }
    return (prod_name);
  }

  getProdImage(prod_id: any) {
    var prod_image
    console.log(prod_id)
    for (let prodInfoTable of this.prodInfoTable) {
      if (prod_id == prodInfoTable.prod_id) {
        console.log('match +++++++++++++++++')
        prod_image = prodInfoTable.prod_image
      }
    }
    return (prod_image);
  }

  getProdDesc(prod_id: any) {
    var prod_desc
    console.log(prod_id)
    for (let prodInfoTable of this.prodInfoTable) {
      if (prod_id == prodInfoTable.prod_id) {
        console.log('match +++++++++++++++++')
        prod_desc = prodInfoTable.prod_desc
      }
    }
    return (prod_desc);
  }

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

  //Total Price

  currentTotal: number = 0;
  total: any;

  computeTotal(number: number) {

    if (number != number) {
      number = 0
    }

    this.currentTotal = this.currentTotal + number;
  }

  getTotal() {
    return (this.currentTotal);
  }



}
