import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Login-Register/login/login.component";
import {RegisterComponent} from "./Login-Register/register/register.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./FE/fe.module').then(module => module.FEModule)
  },
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
