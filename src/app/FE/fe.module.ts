import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LoginComponent} from "../Login-Register/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FeRoutingModule} from "./fe-routing.module";
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { StreamComponent } from './stream/stream.component';
import { BrowseComponent } from './browse/browse.component';
import {AdminComponent} from "./admin/admin.component";
import {ProfileAdminComponent} from "./profile-admin/profile-admin.component";
import {NotificationComponent} from "./notification/notification.component";
import {AccountUserComponent} from "./accountuser/account-user.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ThongBaoComponent} from "../thong-bao/thong-bao.component";


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProfileAdminComponent,
    AdminComponent,
    ThongBaoComponent,
    AccountUserComponent,
    DetailComponent,
    ProfileComponent,
    NotificationComponent,
    StreamComponent,
    BrowseComponent,
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
