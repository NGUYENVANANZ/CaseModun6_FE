import { Component } from '@angular/core';
import {ProfileService} from "../service/profileUser/profile.service";
import {LoginService} from "../service/login/login.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AdminService} from "../service/Admin/admin.service";

@Component({
  selector: 'app-thong-bao',
  templateUrl: './thong-bao.component.html',
  styleUrls: ['./thong-bao.component.css']
})
export class ThongBaoComponent {
  userName = this.loginService.getUserName();
  token = this.loginService.getToken();
  img = this.loginService.getImg();

  constructor(private profile: ProfileService, private loginService: LoginService, private storage: AngularFireStorage,private adminService: AdminService) {
  }
  logOut(){
    this.loginService.logOut();
  }

}
