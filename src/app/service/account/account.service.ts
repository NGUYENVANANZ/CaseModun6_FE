import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DetailAccount} from "../../FE/model/DetailAccount";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  setToken(token : string){
    localStorage.setItem("token", token);
  }
  getToken(){
    return localStorage.getItem("token");
  }

}
