import {DetailAccount} from "./DetailAccount";
import {Roles} from "./Roles";

export class Account {
  id!: number
  username!: string
  string!: string
  email!: string
  phoneNumber!: string
  money !: number
  joinDate !: Date
  detailAccount !: DetailAccount
  role!: Roles[]
  status!: boolean


  constructor(id: number, username: string, string: string, email: string, phoneNumber: string, money: number, joinDate: Date, detailAccount: DetailAccount, role: Roles[], status: boolean) {
    this.id = id;
    this.username = username;
    this.string = string;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.money = money;
    this.joinDate = joinDate;
    this.detailAccount = detailAccount;
    this.role = role;
    this.status = status;
  }
}
