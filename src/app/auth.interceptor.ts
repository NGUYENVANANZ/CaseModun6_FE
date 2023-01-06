<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {AccountService} from "./service/account/account.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

=======
import {AccountService} from "./service/account/account.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
>>>>>>> a127993b3207a8320e2de4399a266df9e32dfce7
export class AuthInterceptor {


  constructor(private accountSerice:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.accountSerice.getToken();
    request = request.clone(
      {
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
    return next.handle(request);

  }
<<<<<<< HEAD
=======

>>>>>>> a127993b3207a8320e2de4399a266df9e32dfce7
}
