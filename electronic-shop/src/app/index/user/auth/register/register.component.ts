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

  userInfo: any = {};
  account: any = {};
  user_name: any;
  user_password: any;

  ngOnInit(): void {
  }

  async regUser() {

    //One Time Create User and PW

    this.userInfo.user_name = "Password";
    this.userInfo.user_password = "Password";

    await this.ds.sendApiRequest("regUser", this.userInfo).subscribe((res: any) => {
      console.log(res);
    })
  }

  async loginUser() {
    this.userInfo.user_name = this.user_name;
    this.userInfo.user_password = this.user_password;

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

