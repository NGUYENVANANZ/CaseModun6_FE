import {Component} from "@angular/core";
import {HomeService} from "../../service/home/home.service";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent  {

  constructor(private home: HomeService, private loginService : LoginService) {
  }

  img = this.loginService.getImg();

}
