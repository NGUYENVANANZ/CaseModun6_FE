import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccountService} from "./service/account/account.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accountSerice:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.accountSerice.getToken();
    request = request.clone(
      {
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
    return next.handle(request);
  }
}
