import {Account} from "./Account";
import {DetailAccount} from "./DetailAccount";

export class Comment {
  id!: number
  star!: number
  text!: string

  constructor(id: number, star: number, text: string) {
    this.id = id;
    this.star = star;
    this.text = text;
  }
}
