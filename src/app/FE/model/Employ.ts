import {Account} from "./Account";
import {DetailAccount} from "./DetailAccount";

export class Employ {
  id!: number
  account!: Account
  detailAccount!: DetailAccount
  date!: Date
  hires!:number


  constructor(id: number, account: Account, detailAccount: DetailAccount, date: Date, hires: number) {
    this.id = id;
    this.account = account;
    this.detailAccount = detailAccount;
    this.date = date;
    this.hires = hires;
  }
}
