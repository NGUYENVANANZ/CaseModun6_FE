import {Img} from "./Img";
import {Provided} from "./Provided";

export class DetailAccount {
  id!: number
  city!: string
  nation!: string
  height!: number
  weight!: number
  soThich!: string
  moTa!: string
  yeucau!: string
  fullName!: string
  birthday!: Date
  gender !: string
  img!: string
  imgs!: Img[]
  provided!: Provided[]
  pricePerDay!: string
  faceLink!: string
  status!: boolean

  constructor(id: number, city: string, nation: string, height: number, weight: number, soThich: string, moTa: string, yeucau: string, fullName: string, birthday: Date, gender: string, img: string, imgs: Img[], provided: Provided[], pricePerDay: string, faceLink: string, status: boolean) {
    this.id = id;
    this.city = city;
    this.nation = nation;
    this.height = height;
    this.weight = weight;
    this.soThich = soThich;
    this.moTa = moTa;
    this.yeucau = yeucau;
    this.fullName = fullName;
    this.birthday = birthday;
    this.gender = gender;
    this.img = img;
    this.imgs = imgs;
    this.provided = provided;
    this.pricePerDay = pricePerDay;
    this.faceLink = faceLink;
    this.status = status;
  }
}
