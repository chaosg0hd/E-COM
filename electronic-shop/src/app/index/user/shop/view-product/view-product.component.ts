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
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private data: DataService, private _snackBar: MatSnackBar) {}

  openBar(message: string) {
    this._snackBar.open(message);
  }


  ngOnInit(): void {
    this.getData()

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

}
