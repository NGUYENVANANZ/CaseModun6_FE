import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../service/profileUser/profile.service";
import {LoginService} from "../../service/login/login.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AdminService} from "../../service/Admin/admin.service";
import {SocketService} from "../../service/Socket/socketService";
import {NotificationDTO} from "../model/DTO/NotificationDTO";
import Swal from "sweetalert2";

@Component({
  selector: 'app-thong-bao',
  templateUrl: './thong-bao.component.html',
  styleUrls: ['./thong-bao.component.css']
})
export class ThongBaoComponent implements OnInit {
  userName = this.loginService.getUserName();
  token = this.loginService.getToken();
  img = this.loginService.getImg();

  stompClient: any
  notification: NotificationDTO[] = []
  notificationCheck !: NotificationDTO;

  constructor(private profile: ProfileService, private loginService: LoginService, private socket: SocketService) {
    this.stompClient = socket.stompClient;
  }

  ngOnInit(): void {
    this.socket.showNotification().subscribe((data) => {
      this.notification = data;
    })
    this.addNotifiCation()
  }

  logOut() {
    this.loginService.logOut();
  }

  addNotifiCation() {
    let url = '/topic/' + this.userName;
    const _this = this;
    this.stompClient.subscribe(url, function (notification: any) {
      console.log(JSON.parse(notification.body));
      _this.notificationCheck = JSON.parse(notification.body);
      _this.notification.push(_this.notificationCheck)
    });
  }

  answer(id_CCDV: number, id_notification: number, money: number) {
    this.socket.setSatus13(id_notification).subscribe((data) => {
      for (let i = 0; i < this.notification.length; i++) {
        if (this.notification[i].id == data.id) {
          this.notification[i] = data
        }
      }
    })
    this.socket.answerUser(id_CCDV, localStorage.getItem("id"))
  }

  cancel(id_CCDV: number, id_notification: number, id_answer: number, money: number){
    this.socket.setSatus14(id_notification).subscribe((data) => {
      for (let i = 0; i < this.notification.length; i++) {
        if (this.notification[i].id == data.id) {
          this.notification[i] = data
        }
      }
    })
    this.socket.answerUser1(id_CCDV, localStorage.getItem("id"))
  }

}
