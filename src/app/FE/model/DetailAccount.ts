import {Img} from "./Img";
import {Provided} from "./Provided";
import {Roles} from "./Roles";

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
  pricePerDay!: number
  money!: number
  faceLink!: string
  status!: boolean
  roles !:Roles[]


  constructor(id: number, city: string, nation: string, height: number, weight: number, soThich: string, moTa: string, yeucau: string, fullName: string, birthday: Date, gender: string, img: string, imgs: Img[], provided: Provided[], pricePerDay: number, money: number, faceLink: string, status: boolean, roles: Roles[]) {
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
    this.money = money;
    this.faceLink = faceLink;
    this.status = status;
    this.roles = roles;
  }
}
