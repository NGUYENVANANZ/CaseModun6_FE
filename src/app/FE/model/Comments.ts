import {Account} from "./Account";
import {DetailAccount} from "./DetailAccount";

export class Comments {
  id!: number
  name!:string
  star!: number
  text!: string


  constructor(id: number, name: string, star: number, text: string) {
    this.id = id;
    this.name = name;
    this.star = star;
    this.text = text;
  }
}
