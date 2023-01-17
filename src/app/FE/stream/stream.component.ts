import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProfileService} from "../../service/profileUser/profile.service";
import {LoginService} from "../../service/login/login.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {SocketService} from "../../service/Socket/socketService";
import {NotificationDTO} from "../model/DTO/NotificationDTO";

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit, OnChanges {
  notification: NotificationDTO[] = []
  notificationCheck !: NotificationDTO;

  stompClient: any

  constructor(private loginService: LoginService, private router: Router, private socket: SocketService) {
    this.stompClient = socket.stompClient;
  }

  token = this.loginService.getToken();
  img = this.loginService.getImg();
  userName = this.loginService.getUserName();
  star: any = 5;
  comment: any = ""

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    if (this.token != "") {
      // @ts-ignore
      document.getElementById("logout").hidden = false;
    }
    this.socket.showNotification().subscribe((data) => {
      this.notification = data;
    })
    this.addNotifiCation()
    this.showStar(this.star)
  }

  addNotifiCation() {
    let url = '/topic/' + this.userName;
    const _this = this;
    this.stompClient.subscribe(url, function (notification: any) {
      console.log(JSON.parse(notification.body));
      _this.notificationCheck = JSON.parse(notification.body);
      let check = true;
      let index = 0;
      for (let i = 0; i < _this.notification.length; i++) {
        if (_this.notification[i].id == _this.notificationCheck.id) {
          check = false;
          index = i;
          break;
        }
      }
      if (check) {
        _this.notification.push(JSON.parse(notification.body));
      } else {
        _this.notification[index] = _this.notificationCheck;
        if (_this.notificationCheck.status == 6) {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: "success",
            timer: 5000,
            title: '+' + _this.notificationCheck.money * 90 / 100 + '$'
          })
        }
      }
    });
  }

  answer(id_CCDV: number, id_notification: number, money: number) {
    this.socket.setSatus2(id_notification).subscribe((data) => {
      for (let i = 0; i < this.notification.length; i++) {
        if (this.notification[i].id == data.id) {
          this.notification[i] = data
        }
      }
    })
    this.socket.answerNotification3(id_CCDV, localStorage.getItem("id"), id_notification, money)
  }

  start(id_CCDV: number, id_notification: number, id_answer: number, money: number) {
    this.socket.setSatus5(id_notification).subscribe((data) => {
      for (let i = 0; i < this.notification.length; i++) {
        if (this.notification[i].id == data.id) {
          this.notification[i] = data
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: "success",
            timer: 5000,
            title: '-' + data.money + '$'
          })
        }
      }
    })
    this.socket.setSatus4(id_CCDV, localStorage.getItem("id"), id_answer, money)
  }

  commentX() {
    this.socket.comment(localStorage.getItem("id_CCDV"), this.star, this.comment).subscribe((data) => {
    })
    localStorage.setItem("id_CCDV", "")
  }

  showStar(star: any) {
    if (!isNaN(this.star)) {
      const f = ~~star
      let id = 'star' + f + (this.star % f ? 'half' : '')
      // @ts-ignore
      id && (document.getElementById(id).checked = !0)
    }
  }

  end(id_CCDV: number, id_notification: number, id_answer: number, money: number) {
    localStorage.setItem("id_CCDV", String(id_CCDV));
    this.socket.setSatus6(id_notification).subscribe((data) => {
      for (let i = 0; i < this.notification.length; i++) {
        if (this.notification[i].id == data.id) {
          this.notification[i] = data
        }
      }
    })
    this.socket.setStatus6x(id_CCDV, localStorage.getItem("id"), id_answer, money)
  }

  cancel(id_CCDV: number, id_notification: number, id_answer: number, money: number) {
    this.socket.setSatus8(id_notification).subscribe((data) => {
      for (let i = 0; i < this.notification.length; i++) {
        if (this.notification[i].id == data.id) {
          this.notification[i] = data
        }
      }
    })
    this.socket.newStatus7(id_CCDV, localStorage.getItem("id"), id_answer, money)
  }

  cancel1(id_CCDV: number, id_notification: number, id_answer: number, money: number) {
    this.socket.setSatus8(id_notification).subscribe((data) => {
      for (let i = 0; i < this.notification.length; i++) {
        if (this.notification[i].id == data.id) {
          this.notification[i] = data
        }
      }
    })
    this.socket.setStatus7(id_CCDV, localStorage.getItem("id"), id_answer, money)
  }

  // @ts-ignore
  onInput(event) {
    localStorage.setItem("search", event.target.value)
    this.router.navigate(["/browse"]);
  }

  logOut() {
    this.loginService.logOut();
  }
}
