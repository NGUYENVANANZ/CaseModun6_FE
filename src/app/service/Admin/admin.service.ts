import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDTO} from "../../FE/model/DTO/AccountDTO";
import {environment} from "../../../environments/environment";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {EmployDTO} from "../../FE/model/DTO/EmployDTO";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  showallAccount(): Observable<AccountDTO[]> {
    console.log(this.http.get<AccountDTO>(`${API_URL}/GetallAccountByRoles2`))
    return this.http.get<AccountDTO[]>(`${API_URL}/GetallAccountByRoles2`);
  }


  showallAccounts3(): Observable<AccountDTO[]> {
    console.log(this.http.get<AccountDTO>(`${API_URL}/GetallAccountByRoles3`))
    return this.http.get<AccountDTO[]>(`${API_URL}/GetallAccountByRoles3`);
  }

  lock(id: any): Observable<AccountDTO[]> {
    // console.log(this.http.get<AccountDTO>(`${API_URL}/GetallAccountByRoles3`))
    return this.http.get<AccountDTO[]>(`${API_URL}/lock/${id}`);
  }

  unlock(id: any): Observable<AccountDTO[]> {
    // console.log(this.http.get<AccountDTO>(`${API_URL}/GetallAccountByRoles3`))
    return this.http.get<AccountDTO[]>(`${API_URL}/unlock/${id}`);
  }

  SetVip(vip: number, id: number): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(`${API_URL}/VipProMax/${vip}/${id}`);
  }

  NapTien(id: number, money: number): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(`${API_URL}/recharge/${id}/${money}`);
  }


  lock1(id : any): Observable<AccountDTO[]> {
    // console.log(this.http.get<AccountDTO>(`${API_URL}/GetallAccountByRoles3`))
    return this.http.get<AccountDTO[]>(`${API_URL}/lock/${id}`);
  }

  unlock1(id : any): Observable<AccountDTO[]> {
    // console.log(this.http.get<AccountDTO>(`${API_URL}/GetallAccountByRoles3`))
    return this.http.get<AccountDTO[]>(`${API_URL}/unlock/${id}`);
  }
}
