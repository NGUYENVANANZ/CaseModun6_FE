import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`;
import {Account} from "../../FE/model/Account";
import {UserToken} from "../../FE/model/DTO/UserToken";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {

  }

  login(account: Account): Observable<UserToken> {
    return this.http.post<UserToken>(API_URL + '/login', account)
  }

  setToken(token: string) {
    localStorage.setItem("token", token)
  }

  getToken(token: string) {
    return localStorage.getItem("token")
  }


  }


