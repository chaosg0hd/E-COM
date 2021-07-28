import { Component, OnInit } from '@angular/core';

//import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

export interface prodTable {
  prod_no: string;
  prod_id: string;
  prod_name: string;
  prod_price: string;
  prod_quantity: string;
  prod_desc: string;  
}


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  //CONSTRUCTORS

  constructor(private data: DataService, public dialog: MatDialog, public router: Router) { }

  //ViewChild

  ngOnInit(): void {
    this.pullAllProd();    
  }

  //ngLifeCycle Goes Here

  //ngOnInit Functions

  //PRODUCT METHODS


  prodInfoTable: prodTable[] = [];

  pullAllProd() {
    this.data.sendApiRequest("pullAllProd", null).subscribe((data: any) => {
      this.prodInfoTable = data.payload;
      console.log(this.prodInfoTable + ' From Shop Page: Method pullAllProd');
    });
    console.log(this.prodInfoTable + ' From Shop Page: Method pullAllProd');
  }

  //View Product

  viewProducts(prod: any) {
    this.data.storeData(prod);
    this.router.navigate(['/view-product']);
  }


  //PAGINATION

  //Add To Cart Modal
  addToCart() {
    const addCart = this.dialog.open(AddToCartComponent);

    addCart.afterClosed().subscribe(result => {
      console.log(`ADD TO CART MODAL DIALOG`);
    });
  }

}
