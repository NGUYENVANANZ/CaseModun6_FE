import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {StreamComponent} from "./stream/stream.component";
import {DetailComponent} from "./detail/detail.component";
import {BrowseComponent} from "./browse/browse.component";
import {AdminComponent} from "./admin/admin.component";
import {NotificationComponent} from "./notification/notification.component";
import {ProfileAdminComponent} from "./profile-admin/profile-admin.component";
import {AccountUserComponent} from "./accountuser/account-user.component";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'Notification', component: NotificationComponent
  },
  {
    path: 'AccountUser', component: AccountUserComponent
  },
  {
    path: 'profileAdmin', component: ProfileAdminComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'stream', component: StreamComponent
  },
  {
    path: 'detail', component: DetailComponent
  },
  {
    path: 'browse', component: BrowseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeRoutingModule { }
