import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {GenderDTO} from "../../FE/model/DTO/GenderDTO";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  detailAccount !: DetailAccount

  gender!: GenderDTO[];

  checkDuplicateMail: boolean = true
  checkDuplicateUsername: boolean = true

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }


  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(12)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("(03|05|07|08|09)+([0-9]{8})")]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('Nam', [Validators.required]),
  })


  register() {
    this.loginService.register(this.registerForm.value).subscribe((data) => {

      this.checkDuplicateUsername = data[0];
      this.checkDuplicateMail = data[1];
      if (data[0] && data[1]) {}
      this.message();
      this.router.navigate(["/login"])
    }
    , (error)=>{
      Swal.fire(
        ' ',
        '<h2 style="color: red; font-size: 32px">Tài khoản của bạn đã bị trùng username hoặc email</h2>',
        'error'
      )
    }
    );
  }

  message() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đăng kí thành công ',
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

  checkUsername() {

  }


}
