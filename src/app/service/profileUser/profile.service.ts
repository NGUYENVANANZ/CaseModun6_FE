import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {EmployDTO} from "../../FE/model/DTO/EmployDTO";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  showProfile(): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(API_URL + '/detailAccount');
  }

  showHistory(): Observable<EmployDTO> {
    return this.http.get<EmployDTO>(API_URL + '/showEmploys');
  }

  editProfile1(): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(API_URL + '/editStatus1');
  }

  editProfile2(): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(API_URL + '/editStatus2');
  }

  requsetAdmin1(): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(API_URL + '/requsetAdmin1');
  }

  requsetAdmin2(): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(API_URL + '/requsetAdmin2');
  }
}
