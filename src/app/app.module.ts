<<<<<<< HEAD


import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import {NgxPaginationModule} from "ngx-pagination";
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AuthInterceptor } from './auth.interceptor';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


>>>>>>> a127993b3207a8320e2de4399a266df9e32dfce7

@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent

  ],
  imports: [
    FormsModule,
    // NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD

    ReactiveFormsModule,
    HttpClientModule

=======
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> a127993b3207a8320e2de4399a266df9e32dfce7
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
