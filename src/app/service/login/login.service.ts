import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

login(user:any):Observable<string>{
    return this.http.post<string>("http://localhost:8080/login",user)
}

  setToken(token:string){
    localStorage.setItem("token",token)
  }
  getToken(token:string){
    return localStorage.getItem("token")
  }



}
