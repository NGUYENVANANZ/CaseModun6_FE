import { Injectable } from '@angular/core';

export class AuthInterceptor {

<<<<<<< HEAD
=======
  constructor(private accountSerice:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.accountSerice.getToken();
    request = request.clone(
      {
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
    return next.handle(request);

  }
>>>>>>> dc87c553d52861d3bac6b776edbb3b75a83a3355
}
