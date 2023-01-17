
export class SignUpForm  {
  username!: any
  email!: any;
  password!: any
  confirmPassword!: any
  phoneNumber!: any
  birthDay!: any
  gender!: any


  constructor(username: any, email: any, password: any, confirmPassword: any, phoneNumber: any, birthDay: any, gender: any) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.phoneNumber = phoneNumber;
    this.birthDay = birthDay;
    this.gender = gender;
  }
}
