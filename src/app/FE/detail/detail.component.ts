
import { Component } from '@angular/core';
import {ProfileService} from "../../service/profileUser/profile.service";
import {LoginService} from "../../service/login/login.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(private profile: ProfileService, private loginService: LoginService, private storage: AngularFireStorage) {
  }

  userName = this.loginService.getUserName();
  token = this.loginService.getToken();
  img = this.loginService.getImg();

}
