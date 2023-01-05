import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {StreamComponent} from "./stream/stream.component";
import {DetailComponent} from "./detail/detail.component";
import {BrowseComponent} from "./browse/browse.component";

const routes: Routes = [
  {
    path: '', component: LoginComponent
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