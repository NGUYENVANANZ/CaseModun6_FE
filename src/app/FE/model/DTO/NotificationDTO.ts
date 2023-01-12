export class NotificationDTO {
  id!:number;

  id_account!:number;

  name!:string

  img!:string

  date!:Date

  money!:number;

  status!:number;

  id_answer !:number


  constructor(id: number, id_account: number, name: string, img: string, date: Date, money: number, status: number, id_answer: number) {
    this.id = id;
    this.id_account = id_account;
    this.name = name;
    this.img = img;
    this.date = date;
    this.money = money;
    this.status = status;
    this.id_answer = id_answer;
  }
}
