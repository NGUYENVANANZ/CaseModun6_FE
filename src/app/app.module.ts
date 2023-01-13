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
import { RegisterComponent } from './FE/register/register.component';
>>>>>>> 371aaf5ad2c4c2bbce9800dc6560f2f17762cc0f
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {NgxPaginationModule} from "ngx-pagination";
import {SocketService} from "./service/Socket/socketService";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
<<<<<<< HEAD

=======
>>>>>>> 371aaf5ad2c4c2bbce9800dc6560f2f17762cc0f
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
