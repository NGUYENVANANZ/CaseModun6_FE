import {Provided} from "../Provided";

export class DetailAccountSart {
  id!: number
  fullName!: string
  img!: string
  moTa!: string
  provideds!: Provided[]
  price!: number
  gender!:string
  birthday!:Date
  city!:string


  constructor(id: number, fullName: string, img: string, moTa: string, provideds: Provided[], price: number, gender: string, birthday: Date, city: string) {
    this.id = id;
    this.fullName = fullName;
    this.img = img;
    this.moTa = moTa;
    this.provideds = provideds;
    this.price = price;
    this.gender = gender;
    this.birthday = birthday;
    this.city = city;
  }
}

