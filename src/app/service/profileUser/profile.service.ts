import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailAccountSart} from "../../FE/model/DTO/DetailAccountSart";
import {environment} from "../../../environments/environment";
import {DetailAccount} from "../../FE/model/DetailAccount";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  showProfile(): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(API_URL + '/detailAccount');
  }
}
