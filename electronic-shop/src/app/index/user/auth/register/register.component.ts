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
    this.regUserxxxxx();
  }

  async regUserxxxxx() {

    //One Time Create User and PW

    this.userInfo.full_name = "ADMINISTORUM";
    this.userInfo.user_name = "ADMIN";
    this.userInfo.user_address = "ADMIN BUILDING";
    this.userInfo.user_email = "ADMIN@ADMIN";
    this.userInfo.user_tel = "ADMIN"
    this.userInfo.user_password = "ADMIN"

    await this.ds.sendApiRequest("regUser", this.userInfo).subscribe((res: any) => {
      console.log(res);
    })
  }

  userInfo: any = {};
  user_name: any;
  full_name: any;
  user_address: any;
  user_email: any;
  user_contact: any;
  user_password: any;

  async regUser() {

    this.userInfo.full_name = this.full_name;
    this.userInfo.user_name = this.user_name;
    this.userInfo.user_address = this.user_address;
    this.userInfo.user_email = this.user_email;
    this.userInfo.user_contact = this.user_contact;
    this.userInfo.user_password = this.user_password;


    await this.ds.sendApiRequest("regUser", this.userInfo).subscribe((res: any) => {
      console.log(res);
    })
  }

 
}

