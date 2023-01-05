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
  ],
  imports: [
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
