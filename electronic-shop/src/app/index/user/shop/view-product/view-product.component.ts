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
  cart_total: string;
}



@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private data: DataService, private _snackBar: MatSnackBar, public route: Router) {}

  openBar(message: string) {
    this._snackBar.open(message);
  }

  ngOnInit(): void {
    this.getData();
    this.getUser();

  }


  prodInfoTable: prodTable[] = [];

  prod_no: any = '';
  prod_id: any = '';
  prod_name: any = '';
  prod_price: any = '';
  prod_quantity: any = '';
  prod_desc: any = '';
  

  getData() {
    this.prodInfoTable[0] = this.data.dataStore;
    console.log(this.prodInfoTable[0]);
  }

  //USER NAME
  user: any;

  getUser() {
    this.user = localStorage.getItem('Name');
  }

  cartInfoTable: cartTable[] = [];

  cartInfo: any = {};
  prod_quantity: any;

  total : any

  getTotal(prod_price: any) {
    this.total = prod_price * this.prod_quantity;

    if (this.total != this.total) {
      this.total = 0
    }
    return this.total;
  }

  addToCart(prod_id : any) {
    
    //Too lazy to make ID 
    this.cartInfo.cart_id = this.user;
    this.cartInfo.user_id = this.user;
    this.cartInfo.prod_id = prod_id;
    this.cartInfo.prod_quantity = this.prod_quantity;
    this.cartInfo.cart_status = 'true';
    this.cartInfo.cart_total = this.total;

    console.log(this.cartInfo)


    this.data.sendApiRequest("addCart", this.cartInfo).subscribe((data: any) => {
      this.prodInfoTable = data.payload;

      this.openBar('ADDED TO CART');
      this.route.navigate(['/view-product'])
    });
  }


}
