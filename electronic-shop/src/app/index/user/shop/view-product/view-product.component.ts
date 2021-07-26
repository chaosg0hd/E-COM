import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  openBar(message: string) {
    this._snackBar.open(message);
  }

  ngOnInit(): void {
  }

}
