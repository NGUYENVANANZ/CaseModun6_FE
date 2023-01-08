import { Component } from '@angular/core';
import {HomeService} from "../../service/home/home.service";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent {

  constructor(private home: HomeService, private loginService : LoginService) {
  }

  img = this.loginService.getImg();
}
