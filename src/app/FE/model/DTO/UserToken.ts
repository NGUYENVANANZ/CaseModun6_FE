// @ts-ignore
// import {Role} from "./role";

import {Roles} from "../Roles";

export class UserToken {

  userName!: string;
  token!: string;
  img!: string;
  roles!: Roles[];
  status!:number;


  constructor(userName: string, token: string, img: string, roles: Roles[], status: number) {
    this.userName = userName;
    this.token = token;
    this.img = img;
    this.roles = roles;
    this.status = status;
  }
}
