import {Account} from "./Account";
import {DetailAccount} from "./DetailAccount";

export class Comment{
id!:number
star!:number
text!:string
account!:Account[]
detailAccount!:DetailAccount[]

  constructor(id: number, star: number, text: string, account: Account[], detailAccount: DetailAccount[]) {
    this.id = id;
    this.star = star;
    this.text = text;
    this.account = account;
    this.detailAccount = detailAccount;
  }
}
