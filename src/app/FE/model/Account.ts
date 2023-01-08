import {DetailAccount} from "./DetailAccount";
import {Roles} from "./Roles";

export class Account {
  id!: number
  username!: string
  password!: string
  email!: string
  phoneNumber!: string
  detailAccount !: DetailAccount
  status!: boolean


  constructor(id: number, username: string, email: string, phoneNumber: string, password:string, detailAccount: DetailAccount, status: boolean) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.detailAccount = detailAccount;
    this.status = status;
    this.password = password;
  }
}
