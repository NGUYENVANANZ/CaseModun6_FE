import {Provided} from "../Provided";

export class SearchFillter {
  id!: number
  fullName!: string
  img!: string
  moTa!: string
  provideds!: Provided[]
  price!: number
  city!: string
  date!: Date
  hires!:number
  gender!:string
  status!: number

  constructor(id: number, fullName: string, img: string, moTa: string, provideds: Provided[], price: number, city: string, date: Date, hires: number, gender: string, status: number) {
    this.id = id;
    this.fullName = fullName;
    this.img = img;
    this.moTa = moTa;
    this.provideds = provideds;
    this.price = price;
    this.city = city;
    this.date = date;
    this.hires = hires;
    this.gender = gender;
    this.status = status;
  }
}
