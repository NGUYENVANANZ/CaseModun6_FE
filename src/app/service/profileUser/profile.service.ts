import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {EmployDTO} from "../../FE/model/DTO/EmployDTO";
import {Employ} from "../../FE/model/Employ";
import {ShowProfileDTO} from "../../FE/model/DTO/ShowProfileDTO";
import {Comments} from "../../FE/model/Comments";

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
  ShowEmploy(): Observable<EmployDTO> {
    return this.http.get<EmployDTO>(API_URL + '/showAll1');
  }
  detail(id:number): Observable<DetailAccount> {
    return this.http.get<DetailAccount>(`${API_URL}/detail/${id}`);
  }
  ShowComment(id: number): Observable<Comments> {
    return this.http.get<Comments>('/ShowComment')
  }
}
