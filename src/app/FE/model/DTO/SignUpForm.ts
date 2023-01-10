import {DetailAccountSart} from "./DetailAccountSart";

export class SignUpForm {
  userName!: any
  email!: any;
  password!: any
  confirmPassword!: any
  phoneNumber!: any
  birthDay!: any
  gender!: any


  constructor(userName: any, email: any, password: any, confirmPassword: any, phoneNumber: any, birthDay: any, gender: any) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.phoneNumber = phoneNumber;
    this.birthDay = birthDay;
    this.gender = gender;
  }
}
