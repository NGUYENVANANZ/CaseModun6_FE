import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {SignUpForm} from "../../FE/model/DTO/SignUpForm";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // checkDuplicateMail: boolean = true
  // checkDuplicateUsername: boolean = true

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
    birthday: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
  })


  register() {
    this.loginService.register(this.registerForm.value).subscribe((data) => {
        this.router.navigate([""])
    });
  }

  // message() {
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: 'Register account success ',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }

  checkConfirmPassword() {

    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      // @ts-ignore
      document.getElementById("abc").style.display = "block";
    } else {
      // @ts-ignore
      document.getElementById("abc").style.display = "none";
    }
  }
}{

}
