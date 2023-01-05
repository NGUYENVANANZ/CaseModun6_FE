import {Provided} from "../Provided";

export class DetailAccountSart {
  id!: number
  fullName!: string
  img!: string
  moTa!: string
  provideds!: Provided[]
  price!: number

  constructor(id: number, moTa: string, fullName: string, img: string, provideds: Provided[], price: number) {
    this.id = id;
    this.moTa = moTa;
    this.fullName = fullName;
    this.img = img;
    this.provideds = provideds;
    this.price = price;
  }
}
