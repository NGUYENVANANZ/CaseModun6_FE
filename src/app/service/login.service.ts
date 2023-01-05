import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../FE/model/Account";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

login(user:any):Observable<string>{
    return this.http.post<string>("http://localhost:3306/login",user)
}

  setToken(token:string){
    localStorage.setItem("token",token)
  }
  getToken(token:string){
    return localStorage.getItem("token")
  }



}
