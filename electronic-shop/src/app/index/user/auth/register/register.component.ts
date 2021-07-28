import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ds: DataService, public route: Router) { }

  

  ngOnInit(): void {
  }

  async regUserxxxxx() {

    //One Time Create User and PW

    this.userInfo.user_name = "Admin";
    this.userInfo.user_password = "12345";

    await this.ds.sendApiRequest("regUser", this.userInfo).subscribe((res: any) => {
      console.log(res);
    })
  }

  userInfo: any = {};
  user_name: any;
  full_name: any;
  user_address: any;
  user_password: any;

  async regUser() {

    //One Time Create User and PW

    this.userInfo.user_name = "Admin";
    this.userInfo.user_password = "12345";

    await this.ds.sendApiRequest("regUser", this.userInfo).subscribe((res: any) => {
      console.log(res);
    })
  }

 
}

