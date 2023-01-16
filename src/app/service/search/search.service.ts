import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailAccountSart} from "../../FE/model/DTO/DetailAccountSart";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {environment} from "../../../environments/environment";
import {SearchFillter} from "../../FE/model/DTO/SearchFillter";
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

  searchFilter(status:number,gender:string,birthday:Date,city:string,hires:number): Observable<SearchFillter>{
    console.log(this.http.get<SearchFillter>(`${API_URL}/search/searchFilter?status=`+status
    +`&gender=`+gender+`&birthday=`+birthday+`&city=`+city+`&hires=`+hires))
    return this.http.get<SearchFillter>(`${API_URL}/search/searchFilter?status=`+status
      +`&gender=`+gender+`&birthday=`+birthday+`&city=`+city+`&hires=`+hires);
  }
}
