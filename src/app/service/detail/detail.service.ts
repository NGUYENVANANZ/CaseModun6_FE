import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DetailAccountSart} from "../../FE/model/DTO/DetailAccountSart";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {Hires} from "../../FE/model/DTO/Hires";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http:HttpClient) { }

  detail(id:number): Observable<DetailAccount> {
    console.log(this.http.get<DetailAccount>(`${API_URL}/detail/${id}`))
    return this.http.get<DetailAccount>(`${API_URL}/detail/${id}`);
  }

  hires(id:number): Observable<Hires> {
    console.log(this.http.get<Hires>(`${API_URL}/hires/${id}`))
    return this.http.get<Hires>(`${API_URL}/hires/${id}`);
  }
}
