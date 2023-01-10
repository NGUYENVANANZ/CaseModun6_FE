import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailAccountSart} from "../../FE/model/DTO/DetailAccountSart";
import {Star} from "../../FE/model/DTO/Star";
import {Hires} from "../../FE/model/DTO/Hires";
import {AccountDTO} from "../../FE/model/DTO/AccountDTO";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  showNewbie(): Observable<DetailAccountSart[]> {
    return this.http.get<DetailAccountSart[]>(API_URL + '/newbie');
  }

  showVip(): Observable<DetailAccountSart[]> {
    return this.http.get<DetailAccountSart[]>(API_URL + '/vip');
  }

  showGender(): Observable<DetailAccountSart[]> {
    return this.http.get<DetailAccountSart[]>(API_URL + '/gender');
  }

  showAccount(): Observable<AccountDTO[]>{
    return this.http.get<AccountDTO[]>(API_URL+ '/account')
  }
  showSart(): Observable<Star[]> {
    return this.http.get<Star[]>(API_URL + '/star');
  }

  showHires(): Observable<Hires[]> {
    return this.http.get<Hires[]>(API_URL + '/hires');
  }
}
