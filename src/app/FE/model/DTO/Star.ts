import {DetailAccountSart} from "./DetailAccountSart";

export class Star {
  detailAccountSart!: DetailAccountSart
  star!: number

  constructor(detailAccountSart: DetailAccountSart, star: number) {
    this.detailAccountSart = detailAccountSart;
    this.star = star;
  }
}
