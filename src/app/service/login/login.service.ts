import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`;
import {Account} from "../../FE/model/Account";
import {UserToken} from "../../FE/model/DTO/UserToken";
import {Router} from "@angular/router";
<<<<<<< HEAD
import {SignUpForm} from "../../FE/model/DTO/SignUpForm";
=======
import {Roles} from "../../FE/model/Roles";
>>>>>>> 4e6c383dbb5fd2e643a67faa53a1cb6b2fef3b08

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private router: Router) {

  }

  logOut() {
    this.setToken("");
    this.setUserName("");
    this.setImg("assets/images/profile-header.jpg")
    this.router.navigate([""]);
  }

  login(account: Account): Observable<UserToken> {
    return this.http.post<UserToken>(API_URL + '/login', account)
  }
  register(signForm: any): Observable<any>{
    return this.http.post<any>(API_URL + '/register',signForm);
  }

  checkRoles(): Observable<boolean> {
    return this.http.get<boolean>(API_URL + '/roles')
  }

  checkRoles1(): Observable<boolean> {
    return this.http.get<boolean>(API_URL + '/roles1')
  }

  setToken(token: string) {
    localStorage.setItem("token", token)
  }

  getToken() {
    return localStorage.getItem("token")
  }

  setUserName(userName: string) {
    localStorage.setItem("userName", userName)
  }

  getUserName() {
    return localStorage.getItem("userName")
  }

  setImg(img: string) {
    localStorage.setItem("img", img)
  }

  getImg() {
    return localStorage.getItem("img")
  }


}

