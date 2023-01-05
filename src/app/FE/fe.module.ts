import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FeRoutingModule} from "./fe-routing.module";
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { StreamComponent } from './stream/stream.component';
import { BrowseComponent } from './browse/browse.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    DetailComponent,
    ProfileComponent,
    StreamComponent,
    BrowseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeRoutingModule,
    ReactiveFormsModule
  ]
})
export class FEModule { }