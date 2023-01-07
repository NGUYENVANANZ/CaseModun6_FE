import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import {DetailAccountSart} from "../model/DTO/DetailAccountSart";
import {UserToken} from "../model/DTO/UserToken";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account ?: UserToken;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  login() {
    // @ts-ignore
    this.loginService.login(this.loginForm.value).subscribe((data) => {
      this.account = data;
      alert(this.account.status)
      this.checkLogin(this.account)
    })
  }

  checkLogin(account: UserToken) {
    if (account.status == 0) {
      // @ts-ignore
      document.getElementById("status").hidden = false;
      return;
    }
    this.loginService.setToken(account.token);
    for (let i = 0; i < account.roles.length; i++) {
      if (account.roles[i].id == 1) {
        this.router.navigate(["/admin"]);
      }
    }
    this.router.navigate(["/home"]);
  }
}
