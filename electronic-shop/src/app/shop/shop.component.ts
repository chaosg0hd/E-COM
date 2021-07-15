import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //Add To Cart Modal
  addToCart() {
    const addCart = this.dialog.open(AddToCartComponent);

    addCart.afterClosed().subscribe(result => {
      console.log(`ADD TO CART MODAL DIALOG`);
    });
  }

}
