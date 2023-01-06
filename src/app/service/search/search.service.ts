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

  showSearch(name:string): Observable<DetailAccount[]> {
    console.log(this.http.get<DetailAccount>(`${API_URL}/search/${name}`))
    return this.http.get<DetailAccount[]>(`${API_URL}/search/${name}`);
  }
}
