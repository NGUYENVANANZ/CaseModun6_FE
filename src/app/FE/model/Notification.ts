import {Account} from "./Account";

export class Notification {
  id !: number;
  date !: Date;
  money!: number
  account!: Account
  status!: number


  constructor(id: number, date: Date, money: number, account: Account, status: number) {
    this.id = id;
    this.date = date;
    this.money = money;
    this.account = account;
    this.status = status;
  }
}
