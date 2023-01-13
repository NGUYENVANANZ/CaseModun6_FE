import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import Swal from "sweetalert2";
import {SocketService} from "../../service/Socket/socketService";
import {UserToken} from "../model/DTO/UserToken";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  account ?: UserToken;


  constructor(private loginService: LoginService, private router: Router, private socket: SocketService) {
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
      Swal.fire(
        ' ',
        '<h2 style="color: green; font-size: 32px">Đăng nhập thành công!!!</h2>',
        'success'
      )
      this.socket.connect(this.account.userName)
    }, (error) => {
      Swal.fire(
        ' ',
        '<h2 style="color: red; font-size: 32px">Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!</h2>',
        'error'
      )
    })
  }

  checkLogin(account: UserToken) {
    this.loginService.setToken(account.token);
    this.loginService.setUserName(account.userName);
    this.loginService.setImg(account.img)
    localStorage.setItem("id", account.id)
    localStorage.setItem("search", "")
    for (let i = 0; i < account.roles.length; i++) {
      if (account.roles[i].id == 1) {
        this.router.navigate(["/admin"]);
        return;
      }
    }
    this.router.navigate(["/home"]);
  }
}
