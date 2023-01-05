import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "./service/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.loginService.getToken("");
    request = request.clone(
      {
        headers:request.headers.set('Authorization', `Bearer ${token}`)
      }
    );
    return next.handle(request)
  }
}
