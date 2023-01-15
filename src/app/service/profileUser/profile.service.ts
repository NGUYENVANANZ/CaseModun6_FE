import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {EmployDTO} from "../../FE/model/DTO/EmployDTO";
import {ShowProfileDTO} from "../../FE/model/DTO/ShowProfileDTO";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  showProfile(): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(API_URL + '/detailAccount');
  }

  showEdit(): Observable<ShowProfileDTO> {
    return this.http.get<ShowProfileDTO>(API_URL + '/showEdit')
  }

  editProfile(detail : any): Observable<DetailAccount> {
    return this.http.post<DetailAccount>(API_URL + '/editProfile', detail)
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

  save(img : string): Observable<DetailAccount> {
    return this.http.post<DetailAccount>(API_URL + '/saveDetailAccount', img);
  }
  detail(id:number): Observable<DetailAccount> {
    console.log(this.http.get<DetailAccount>(`${API_URL}/detail/${id}`))
    return this.http.get<DetailAccount>(`${API_URL}/detail/${id}`);
  }

  saveImage(img:any): Observable<DetailAccount> {
    return this.http.post<DetailAccount>(`${API_URL}/editImg`, img);
  }
}
