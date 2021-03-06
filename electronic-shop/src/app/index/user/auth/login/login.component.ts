import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds: DataService, public route: Router) { }

  userInfo: any = {};
  user_name: any;
  user_password: any;

  ngOnInit(): void {
  }


  //async regUser() {

  //  this.userInfo.user_name = "Administrator";
  //  this.userInfo.user_password = "Administrator";

  //  await this.ds.sendApiRequest("regUser", this.userInfo).subscribe((res: any) => {
  //    console.log(res);
  //  })
  //}

  async loginUser() {
    this.userInfo.user_name = this.user_name;
    this.userInfo.user_password = this.user_password;

    console.log(this.userInfo);

    await this.ds.sendApiRequest("loginUser", this.userInfo).subscribe((res: any) => {
      console.log(res);

      if (res.payload.length == 0) {
        alert("Incorrect Credentials");
      }
      else {
        localStorage.setItem("Name", res.payload.user_name);
        this.route.navigate(['/home']);
      }
    });
  }


}
