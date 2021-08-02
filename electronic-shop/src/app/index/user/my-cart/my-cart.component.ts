import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';



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

  //Too lazy to palce to database so eto n lang haha

  name = "Via Grazielle Torres";

  contact = "(+63) 951 127 9228";

  address = "32 Caron St.West Bajac-Bajac, Olongapo City, North Luzon, Zambales 2200";



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


  currentTotal: number = 0;
  total: any;

  filterCart() {

    this.currentTotal = 0;

    for (let cartInfoTable of this.cartInfoTable) {
      if (cartInfoTable.cart_id === this.user) {
        if (cartInfoTable.cart_status === 'true') {
          console.log('matched');
          this.currentTotal = this.currentTotal + cartInfoTable.cart_total;
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

  //computeTotal(number: number) {
  //  if (number != number) {
  //    number = 0
  //  }
  //  this.currentTotal = this.currentTotal + number;
  //}

  getTotal() {
    this.total = this.currentTotal;
    return (this.total);
  }

  getCount() {
    var count = this.cartInfoTable.length
    return (count);
  }

  addOrderInfo: any = {};

  generateOrder() {

    console.log(this.cartInfoTable);
    var orderstring: string;

    console.log(this.name);
    console.log(this.address);
    console.log(this.contact);

    orderstring = ' USER ' + ':' + this.name + '; ADDRESS :' + this.address + '; CONTACT INFO: ' + this.contact + '; WITH ORDER :';

    var cartInfostring: string = '';

    console.log(orderstring);      

    for (let cartInfoTable of this.cartInfoTable) {

      cartInfostring = cartInfoTable.prod_quantity + ' UNITS OF:' + this.getProdName(cartInfoTable.prod_id) + ' @ TOTAL OF : ' + cartInfoTable.cart_total + 'php ; ';
      console.log(cartInfoTable);
      console.log(cartInfoTable.prod_quantity);
      console.log(this.getProdName(cartInfoTable.prod_id));
      orderstring = orderstring + cartInfostring      
    }

    orderstring = orderstring + 'TOTALLING TO:' + this.total;

    console.log(orderstring);
    this.addOrder(orderstring);

    this.route.navigate(['/profile'])


  }

  addOrder(orderstring: any) {


    this.addOrderInfo = {};
    this.addOrderInfo.user_id = this.user;
    this.addOrderInfo.order_content = orderstring;
    this.addOrderInfo.order_total = this.total;

    console.log(this.addOrderInfo);


    this.data.sendApiRequest("addOrder", this.addOrderInfo).subscribe((data: any) => {
      console.log(this.addOrderInfo + ' From Shop Page: Method pullAllProd');
    });

    for (let cartInfoTable of this.cartInfoTable) {
      this.delCart(cartInfoTable);
    }
  }

  delCart(cartInfo: any) {
    console.log(cartInfo)
    this.data.sendApiRequest("delCart", cartInfo).subscribe((data: any) => {
    });
  }

  //editCartInfo(cartInfoTable: any) {
  //  this.data.sendApiRequest("editCart", cartInfoTable).subscribe((data: any) => {
  //    console.log(this.addOrderInfo + ' From Shop Page: Method pullAllProd');
  //  });

  //}

}

//@Component({
//  selector: 'dialog-content-example-dialog',
//  templateUrl: 'dialog-content-example-dialog.html',
//})
//export class DialogContentExampleDialog { }
