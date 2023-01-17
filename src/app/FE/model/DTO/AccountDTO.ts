import {DetailAccount} from "../DetailAccount";

export class AccountDTO {
  id!: number
  img!: string
  fullName!: string
  MoTa!: string
  status!: number
  vip!: number
  detailAccount!:DetailAccount;
  money!: number
  constructor(id: number,img: string, fullName: string, MoTa: string, price: number, status: number, vip: number,money: number ) {
    this.id = id;
    this.img = img;
    this.fullName = fullName;
    this.MoTa = MoTa;
    this.status = status;
    this.vip = vip;
    this.money = money;
  }
}
