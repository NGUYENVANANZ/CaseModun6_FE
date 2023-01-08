import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LoginComponent} from "./login/login.component";
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
  ],
<<<<<<< HEAD
  imports: [
    CommonModule,
    FormsModule,
    FeRoutingModule,
    ReactiveFormsModule,
  ]
=======
    imports: [
        CommonModule,
        FormsModule,
        FeRoutingModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        // NgxPaginationModule
    ]
>>>>>>> 03fd24ddede354c7648236c7ceda53ac26ec420b
})
export class FEModule { }
