import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { AddProductsComponent } from './add-products/add-products.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['position', 'name', 'quantity', 'price'];
  dataSource = new MatTableDataSource<ElectronicElement>(ELEMENT_DATA);

  @ViewChild(
    MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(
    MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //Modal ADD PRODUCTS
  openAddProducts() {
    const addProducts = this.dialog.open(AddProductsComponent);

    addProducts.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

export interface ElectronicElement {
  name: string;
  position: number;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: ElectronicElement[] = [
  {position: 1, name: 'Breadboard', quantity: 10, price: 120},
  {position: 2, name: 'Current Tester', quantity: 12, price: 350},
  {position: 3, name: 'Internet Tester', quantity: 1, price: 19},
  {position: 4, name: 'Lead', quantity: 34, price: 19},
  {position: 5, name: 'LED', quantity: 45, price: 7},
  {position: 6, name: 'Resistor', quantity: 87, price: 10},
  {position: 7, name: 'RJ45', quantity: 23, price: 7},
  {position: 8, name: 'Soldering Iron', quantity: 56, price: 130},
  {position: 9, name: 'UTP Cable', quantity: 23, price: 150},
  {position: 10, name: 'Cable Wire', quantity: 63, price: 160}
];

