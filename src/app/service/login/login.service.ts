import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`;
import {Account} from "../../FE/model/Account";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {

  }

  login(account: Account): Observable<Account> {
    return this.http.post<Account>(API_URL + '/login', account)
  }

  setToken(token: string) {
    localStorage.setItem("token", token)
  }

  getToken(token: string) {
    return localStorage.getItem("token")
  }


  }


