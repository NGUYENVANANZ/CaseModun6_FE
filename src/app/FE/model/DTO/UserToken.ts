// @ts-ignore
// import {Role} from "./role";

import {Roles} from "../Roles";

export class UserToken {

  name!: string;
  token!: string;
  roles!: Roles[]
  status!:number


  constructor(name: string, token: string, roles: Roles[], status: number) {
    this.name = name;
    this.token = token;
    this.roles = roles;
    this.status = status;
  }
}
