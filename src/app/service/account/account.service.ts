import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
const API_URL = `${environment.apiUrl}`;

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
