<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { AuthInterceptor } from './auth.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from "@angular/forms";
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
  AppComponent,
  NotificationComponent,
=======
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent
>>>>>>> dc87c553d52861d3bac6b776edbb3b75a83a3355
  ],
  imports: [
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
=======
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> dc87c553d52861d3bac6b776edbb3b75a83a3355
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
