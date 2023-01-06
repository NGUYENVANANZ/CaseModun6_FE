// @ts-ignore
// import {Role} from "./role";

import {Roles} from "../Roles";

export class UserToken {

  name!: string;
  token!: string;
  roles!: Roles[]

  constructor(name: string, token: string, roles: Roles[]) {
    this.name = name;
    this.token = token;
    this.roles = roles;
  }
}
