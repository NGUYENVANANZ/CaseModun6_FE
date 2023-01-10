import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import {UserToken} from "../../FE/model/DTO/UserToken";

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
    this.loginService.setToken("");
    this.loginService.setUserName("");
    this.loginService.setImg("assets/images/profile-header.jpg")
  }

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  login() {
    // @ts-ignore
    this.loginService.login(this.loginForm.value).subscribe((data) => {
      this.account = data;
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
    this.loginService.setUserName(account.userName);
    this.loginService.setImg(account.img)
    for (let i = 0; i < account.roles.length; i++) {
      if (account.roles[i].id == 1) {
        this.router.navigate(["/admin"]);
        return;
      }
    }
    this.router.navigate(["/home"]);
  }
}
