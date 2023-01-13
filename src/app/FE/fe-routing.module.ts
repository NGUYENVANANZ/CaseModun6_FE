<<<<<<< HEAD
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {StreamComponent} from "./stream/stream.component";
import {DetailComponent} from "./detail/detail.component";
import {BrowseComponent} from "./browse/browse.component";
import {AdminComponent} from "./admin/admin.component";
import {RegisterComponent} from "../Login-Register/register/register.component";
import {NotificationComponent} from "./notification/notification.component";
import {ProfileAdminComponent} from "./profile-admin/profile-admin.component";
=======
import {NgModule} from '@angular/core';
import {HomeComponent} from "../FE/home/home.component";
import {ProfileComponent} from "../FE/profile/profile.component";
import {StreamComponent} from "../FE/stream/stream.component";
import {DetailComponent} from "../FE/detail/detail.component";
import {BrowseComponent} from "../FE/browse/browse.component";
import {AdminComponent} from "../FE/admin/admin.component";
import {RegisterComponent} from "./register/register.component";
import {NotificationComponent} from "../FE/notification/notification.component";
import {ProfileAdminComponent} from "../FE/profile-admin/profile-admin.component";
>>>>>>> 371aaf5ad2c4c2bbce9800dc6560f2f17762cc0f
import {AccountUserComponent} from "./accountuser/account-user.component";
import {HomeGuard} from "../FE/home/home.guard";
import {AccountuserGuard} from "./accountuser/accountuser.guard";
<<<<<<< HEAD
import {ProfileGuard} from "./profile/profile.guard";
import {StreamGuard} from "./stream/stream.guard";
import {BrowseGuard} from "./browse/browse.guard";
import {AdminGuard} from "./admin/admin.guard";
import {NotificationGuard} from "./notification/notification.guard";
import {ProfileAdminGuard} from "./profile-admin/profile-admin.guard";
import {DetailGuard} from "./detail/detail.guard";
import {LoginComponent} from "../Login-Register/login/login.component";
import {RouterModule, Routes} from "@angular/router";

=======
import {ProfileGuard} from "../FE/profile/profile.guard";
import {StreamGuard} from "../FE/stream/stream.guard";
import {BrowseGuard} from "../FE/browse/browse.guard";
import {AdminGuard} from "../FE/admin/admin.guard";
import {NotificationGuard} from "../FE/notification/notification.guard";
import {ProfileAdminGuard} from "../FE/profile-admin/profile-admin.guard";
import {DetailGuard} from "../FE/detail/detail.guard";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";
>>>>>>> 371aaf5ad2c4c2bbce9800dc6560f2f17762cc0f

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {path: 'register', component: RegisterComponent},
  {
    path: 'test', component: TestComponent
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [AdminGuard]
  },
  {
    path: 'Notification', component: NotificationComponent, canActivate: [NotificationGuard]
  },
  {
    path: 'AccountUser', component: AccountUserComponent, canActivate: [AccountuserGuard]
  },
  {
    path: 'profileAdmin', component: ProfileAdminComponent, canActivate: [ProfileAdminGuard]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [HomeGuard]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]
  },
  {
    path: 'stream', component: StreamComponent, canActivate: [StreamGuard]
  },
  {
    path: 'detail/:id', component: DetailComponent, canActivate: [DetailGuard]
  },
  {
    path: 'browse', component: BrowseComponent, canActivate: [BrowseGuard]
  },
  {
    path: 'register', component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeRoutingModule {
}
