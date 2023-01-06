import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailAccountSart} from "../../FE/model/DTO/DetailAccountSart";
import {DetailAccount} from "../../FE/model/DetailAccount";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  showSearch(): Observable<DetailAccount[]> {
    return this.http.get<DetailAccount[]>("http://localhost:8080/search/" + 'name');
  }
}
