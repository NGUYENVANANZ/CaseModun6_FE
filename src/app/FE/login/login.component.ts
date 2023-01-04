import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormGroup("",Validators.required),
    password: new FormGroup("",Validators.required)
  })
}
