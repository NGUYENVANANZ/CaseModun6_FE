import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService :LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })

  login(){
    // @ts-ignore
    this.loginService.login(this.loginForm.value).subscribe((data)=>{
      // @ts-ignore
      this.loginService.setToken(data.token);
      this.router.navigate(["/home"])
    })
  }


}
