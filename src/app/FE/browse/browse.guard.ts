import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../../service/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class BrowseGuard implements CanActivate {
  constructor(private loginService : LoginService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.loginService.getToken();
    if (token != ""){
      return true;
    }
    this.router.navigate([""]);
    return false;
  }

}
