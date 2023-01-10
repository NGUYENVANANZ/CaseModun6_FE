import {Img} from "./Img";
import {Provided} from "./Provided";
import {Roles} from "./Roles";
import {Comments} from "./Comments";

export class DetailAccount {
  id !: number
  city!: string
  nation!: string
  gender!: string
  height!: number
  weight!: number
  soThich!: string
  moTa!: string
  yeuCau!: string
  fullName!: string
  birthday!: Date
  joinDate!: Date
  money!: number
  img!: string
  imgs!: Img[]
  provideds!: Provided[]
  comments!: Comments[]
  pricePerDay!: number
  faceLink !: string
  status!: number
  vip!: number
  roles!: Roles[];


  constructor(id: number, city: string, nation: string, gender: string, height: number, weight: number, soThich: string, moTa: string, yeuCau: string, fullName: string, birthday: Date, joinDate: Date, money: number, img: string, imgs: Img[], provideds: Provided[], comments: Comments[], pricePerDay: number, faceLink: string, status: number, vip: number, roles: Roles[]) {
    this.id = id;
    this.city = city;
    this.nation = nation;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.soThich = soThich;
    this.moTa = moTa;
    this.yeuCau = yeuCau;
    this.fullName = fullName;
    this.birthday = birthday;
    this.joinDate = joinDate;
    this.money = money;
    this.img = img;
    this.imgs = imgs;
    this.provideds = provideds;
    this.comments = comments;
    this.pricePerDay = pricePerDay;
    this.faceLink = faceLink;
    this.status = status;
    this.vip = vip;
    this.roles = roles;
  }
}
