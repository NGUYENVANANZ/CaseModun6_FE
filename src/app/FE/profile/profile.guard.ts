import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../../service/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private loginService : LoginService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.loginService.getToken();
    if (token == ""){
      this.router.navigate([""]);
      return false;
    }

    let promit = new Promise((resolve, reject) => {
      this.loginService.checkRoles1().subscribe((data) => {
        resolve(true);
      }, (error) => {
        this.router.navigate(["/profileAdmin"]);
        reject(false)
      })
    })
    // @ts-ignore
    return promit;
  }

}
