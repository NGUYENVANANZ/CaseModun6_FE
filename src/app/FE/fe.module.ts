import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FeRoutingModule} from "./fe-routing.module";
import {AccountUserComponent} from "./accountuser/account-user.component";
import {NgxPaginationModule} from "ngx-pagination";
import {HomeComponent} from "./home/home.component";
import {ProfileAdminComponent} from "./profile-admin/profile-admin.component";
import {AdminComponent} from "./admin/admin.component";
import {DetailComponent} from "./detail/detail.component";
import {ProfileComponent} from "./profile/profile.component";
import {NotificationComponent} from "./notification/notification.component";
import {StreamComponent} from "./stream/stream.component";
import {TestComponent} from "./test/test.component";
import {BrowseComponent} from "./browse/browse.component";



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProfileAdminComponent,
    AdminComponent,
    AccountUserComponent,
    DetailComponent,
    ProfileComponent,
    NotificationComponent,
    StreamComponent,
    BrowseComponent,
    TestComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        FeRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
    ]
})
export class FEModule { }
