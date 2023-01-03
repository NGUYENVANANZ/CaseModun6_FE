import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {FeRoutingModule} from "./fe-routing.module";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeRoutingModule
  ]
})
export class FEModule { }
