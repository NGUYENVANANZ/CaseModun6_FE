import {DetailAccountSart} from "./DetailAccountSart";

export class EmployDTO {
  userName !: string;
  img !: string;
  date!: Date;
  price!: number;


  constructor(userName: string, img: string, date: Date, price: number) {
    this.userName = userName;
    this.img = img;
    this.date = date;
    this.price = price;
  }
}
