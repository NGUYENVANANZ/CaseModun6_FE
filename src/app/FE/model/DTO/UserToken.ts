// @ts-ignore
// import {Role} from "./role";

import {Roles} from "../Roles";

export class UserToken {
  id!: any
  userName!: string;
  token!: string;
  img!: string;
  roles!: Roles[];
  status!: number;


  constructor(id: number, userName: string, token: string, img: string, roles: Roles[], status: number) {
    this.id = id;
    this.userName = userName;
    this.token = token;
    this.img = img;
    this.roles = roles;
    this.status = status;
  }
}
