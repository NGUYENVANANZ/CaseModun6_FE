import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { RouterModule, Routes, ParamMap } from '@angular/router';
// import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {StreamComponent} from "./stream/stream.component";
import {DetailComponent} from "./detail/detail.component";
import {BrowseComponent} from "./browse/browse.component";
import {AdminComponent} from "./admin/admin.component";
import {RegisterComponent} from "../Login-Register/register/register.component";
import {NotificationComponent} from "./notification/notification.component";
import {ProfileAdminComponent} from "./profile-admin/profile-admin.component";
import {AccountUserComponent} from "./accountuser/account-user.component";
import {HomeGuard} from "./home/home.guard";
import {AccountuserGuard} from "./accountuser/accountuser.guard";
import {ProfileGuard} from "./profile/profile.guard";
import {StreamGuard} from "./stream/stream.guard";
import {BrowseGuard} from "./browse/browse.guard";
import {AdminGuard} from "./admin/admin.guard";
import {NotificationGuard} from "./notification/notification.guard";
import {ProfileAdminGuard} from "./profile-admin/profile-admin.guard";
import {DetailGuard} from "./detail/detail.guard";
import {LoginComponent} from "../Login-Register/login/login.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'admin', component: AdminComponent, canActivate : [AdminGuard]
  },
  {
    path: 'Notification', component: NotificationComponent, canActivate : [NotificationGuard]
  },
  {
    path: 'AccountUser', component: AccountUserComponent, canActivate : [AccountuserGuard]
  },
  {
    path: 'profileAdmin', component: ProfileAdminComponent, canActivate : [ProfileAdminGuard]
  },
  {
    path: 'home', component: HomeComponent, canActivate : [HomeGuard]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate : [ProfileGuard]
  },
  {
    path: 'stream', component: StreamComponent, canActivate : [StreamGuard]
  },
  {
    path: 'detail/:id', component: DetailComponent, canActivate : [DetailGuard]
  },
  {
    path: 'browse', component: BrowseComponent, canActivate : [BrowseGuard]
  },
  {
    path: 'register', component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeRoutingModule { }
