import {AccountService} from "./service/account/account.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
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

}
