import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from './auth.interceptor';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
<<<<<<< HEAD
import { RegisterComponent } from './Login-Register/register/register.component';
=======
import {RegisterComponent} from './Login-Register/register/register.component';
>>>>>>> c693e0e7458f07b60810a5c692232f45d7d5ca52
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
<<<<<<< HEAD

=======
>>>>>>> c693e0e7458f07b60810a5c692232f45d7d5ca52
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
