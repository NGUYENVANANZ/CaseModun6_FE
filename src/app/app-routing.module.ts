import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./FE/register/register.component";
import {LoginComponent} from "./FE/login/login.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./FE/fe.module').then(module => module.FEModule)
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
