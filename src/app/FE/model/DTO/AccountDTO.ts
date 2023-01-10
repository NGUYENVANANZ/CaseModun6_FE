export class AccountDTO {
  id!: number
  img!: string
  fullName!: string
  MoTa!: string
  status!: number
  constructor(id: number,img: string, fullName: string, MoTa: string, price: number, status: number) {
    this.id = id;
    this.img = img;
    this.fullName = fullName;
    this.MoTa = MoTa
    this.status = status

  }
}
