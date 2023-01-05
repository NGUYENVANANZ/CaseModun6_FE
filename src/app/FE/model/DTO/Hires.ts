import {DetailAccountSart} from "./DetailAccountSart";

export class Hires {
  detailAccountSart!: DetailAccountSart
  hires!: number

  constructor(detailAccountSart: DetailAccountSart, hires: number) {
    this.detailAccountSart = detailAccountSart;
    this.hires = hires;
  }
}
