import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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


  searchByAll(
    gender:string,
    birthday:number,
    city:string)
    : Observable<DetailAccountSart[]> {
    let params = new HttpParams()
      .set('gender',gender)
      .set('birthday',birthday)
      .set('city',city);

    return this.http.get<DetailAccountSart[]>(`${API_URL}/search/searchFilter`, {params:params});
  }
}
