import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailAccountSart} from "../../FE/model/DTO/DetailAccountSart";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {environment} from "../../../environments/environment";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  showSearch(name:string): Observable<DetailAccountSart[]> {
    console.log(this.http.get<DetailAccountSart>(`${API_URL}/search/${name}`))
    return this.http.get<DetailAccountSart[]>(`${API_URL}/search/${name}`);
  }

  showAll(): Observable<DetailAccountSart[]> {
    console.log(this.http.get<DetailAccountSart>(`${API_URL}/showAll`))
    return this.http.get<DetailAccountSart[]>(`${API_URL}/showAll`);
  }
}
