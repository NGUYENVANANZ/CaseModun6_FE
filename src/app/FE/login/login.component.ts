import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private loginService:LoginService) {
  }
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormGroup("",Validators.required),
    password: new FormGroup("",Validators.required)
  })
  login(){
    this.loginService.login(this.loginForm.value).subscribe((data)=>{
        this.loginService.setToken(data)
    })
  }

}
