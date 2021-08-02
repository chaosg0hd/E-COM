import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';

export interface ordersTable {
  order_no: any;
  user_id: any;
  order_content: any;
  order_total: any;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements AfterViewInit {

  ordersInfoTable: ordersTable[] = [];
  ordersInfoTableDataSource = new MatTableDataSource(this.ordersInfoTable);
  empInfoTableLastNo: any;

  ngOnInit(): void {
    this.pullAllOrders()
  }

  constructor(private data: DataService) {}

  displayedColumns: string[] = ['order_no', 'user_id' , 'order_content', 'order_total'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.ordersInfoTableDataSource.paginator = this.paginator;
    this.ordersInfoTableDataSource.sort = this.sort;
  }

  pullAllOrders() {
    this.data.sendApiRequest("pullAllOrders", null).subscribe((data: any) => {
      console.log(data + 'From Emp Page: Method pullAllEmp');
      this.ordersInfoTable = data.payload;
      this.ordersInfoTableDataSource.data = this.ordersInfoTable;
      console.log(this.ordersInfoTableDataSource);
      //console.log(this.empInfoTable + 'From Emp Page: Method pullAllEmp');
      //this.empInfoTableDataSource.data = this.empInfoTable;
      //console.log(this.empInfoTableDataSource + ' From Emp Page: Method pullAllEmp');
      //this.empInfoTableLastNo = this.empInfoTable[this.empInfoTable.length - 1].emp_no;
      //console.log(this.empInfoTableLastNo);
    });
  }

}



//const ELEMENT_DATA: ElectronicElement[] = [
//  {position: 1, name: 'Breadboard', quantity: 10, price: 120},
//  {position: 2, name: 'Current Tester', quantity: 12, price: 350},
//  {position: 3, name: 'Internet Tester', quantity: 1, price: 19},
//  {position: 4, name: 'Lead', quantity: 34, price: 19},
//  {position: 5, name: 'LED', quantity: 45, price: 7},
//  {position: 6, name: 'Resistor', quantity: 87, price: 10},
//  {position: 7, name: 'RJ45', quantity: 23, price: 7},
//  {position: 8, name: 'Soldering Iron', quantity: 56, price: 130},
//  {position: 9, name: 'UTP Cable', quantity: 23, price: 150},
//  {position: 10, name: 'Cable Wire', quantity: 63, price: 160}
//];


