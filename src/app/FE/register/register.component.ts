import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {DetailAccount} from "../model/DetailAccount";

// import {SignUpForm} from "../../FE/model/DTO/SignUpForm";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  detailAccount !: DetailAccount


  checkDuplicateMail: boolean = true
  checkDuplicateUsername: boolean = true

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("(03|05|07|08|09)+([0-9]{8})")]),
    gender: new FormControl("", Validators.nullValidator),
  })


  register() {
    this.loginService.register(this.registerForm.value).subscribe((data) => {
      this.checkDuplicateUsername = data[0];
      this.checkDuplicateMail = data[1];
      if (data[0] && data[1]) {
        this.message()
        this.router.navigate([" "])
      }
    });
  }

  message() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Register account success ',
      showConfirmButton: false,
      timer: 1500
    })
  }

  checkConfirmPassword() {

    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      // @ts-ignore
      document.getElementById("abc").style.display = "block";
    } else {
      // @ts-ignore
      document.getElementById("abc").style.display = "none";
    }
  }



}


