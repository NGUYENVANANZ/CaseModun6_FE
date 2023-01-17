import {Component} from "@angular/core";
import {HomeService} from "../../service/home/home.service";
import {LoginService} from "../../service/login/login.service";
import {EmployDTO} from "../model/DTO/EmployDTO";
import {ProfileService} from "../../service/profileUser/profile.service";
import {Employ} from "../model/Employ";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  history: EmployDTO[] = []

  constructor(private profile: ProfileService, private loginService: LoginService) {
  }
  S : number = 1
  img = this.loginService.getImg();


  logOut() {
    this.loginService.logOut();
  }

  ngOnInit(): void {
    this.profile.ShowEmploy().subscribe((data) => {
      // @ts-ignore
      this.history = data;
    })
  }
}
