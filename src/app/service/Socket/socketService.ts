import {Stomp} from "@stomp/stompjs";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NotificationDTO} from "../../FE/model/DTO/NotificationDTO";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  title = 'grokonez';
  description = 'Angular-WebSocket Demo';

  public stompClient: any;

  constructor(private http: HttpClient) {
  }

  connect(userName: string) {
    // đường dẫn đến server
    const socket = new WebSocket('ws://localhost:8080/gkz-stomp-endpoint/websocket');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      let url = '/topic/' + userName;
      _this.stompClient.subscribe(url);
    });
  }


  sendName(name: any, message: any) {
    this.stompClient.send(
      '/gkz/hello',
      {},
      // Dữ liệu được gửi đi
      // JSON.stringify({'name': name, 'message': message})

    );
  }

  sendNotification1(id_CCDV: any, id_NDDV: any, id_notification: any, money: any) {
    this.stompClient.send(
      '/gkz/newNotification',
      {},
      JSON.stringify({'id_CCDV': id_CCDV, 'id_NDDV': id_NDDV, 'id_Notification': id_notification, 'money': money})
    );
  }

  answerNotification3(id_CCDV: any, id_NDDV: any, id_notification: any, money: any) {
    this.stompClient.send(
      '/gkz/newNotificationAnswer',
      {},
      JSON.stringify({'id_CCDV': id_CCDV, 'id_NDDV': id_NDDV, 'id_Notification': id_notification, 'money': money})
    );
  }

  setSatus4(id_CCDV: any, id_NDDV: any, id_notification: any, money: any) {
    this.stompClient.send(
      '/gkz/setSatus4',
      {},
      JSON.stringify({'id_CCDV': id_CCDV, 'id_NDDV': id_NDDV, 'id_Notification': id_notification, 'money': money})
    );
  }

  setStatus6x(id_CCDV: any, id_NDDV: any, id_notification: any, money: any) {
    this.stompClient.send(
      '/gkz/setSatus6',
      {},
      JSON.stringify({'id_CCDV': id_CCDV, 'id_NDDV': id_NDDV, 'id_Notification': id_notification, 'money': money})
    );
  }


  showNotification(): Observable<NotificationDTO[]> {
    return this.http.get<NotificationDTO[]>(API_URL + '/notificationDTO');
  }

  setSatus2(id: number): Observable<NotificationDTO> {
    return this.http.get<NotificationDTO>(API_URL + '/setSatus2/' + id);
  }

  setSatus5(id: number): Observable<NotificationDTO> {
    return this.http.get<NotificationDTO>(API_URL + '/setSatus5/' + id);
  }

  setSatus6(id: number): Observable<NotificationDTO> {
    return this.http.get<NotificationDTO>(API_URL + '/setSatus6/' + id);
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }

  setStatus7(id_CCDV: any, id_NDDV: any, id_notification: any, money: any) {
    this.stompClient.send(
      '/gkz/setSatus7',
      {},
      JSON.stringify({'id_CCDV': id_CCDV, 'id_NDDV': id_NDDV, 'id_Notification': id_notification, 'money': money})
    );
  }

  newStatus7(id_CCDV: any, id_NDDV: any, id_notification: any, money: any) {
    this.stompClient.send(
      '/gkz/newSatus7',
      {},
      JSON.stringify({'id_CCDV': id_CCDV, 'id_NDDV': id_NDDV, 'id_Notification': id_notification, 'money': money})
    );
  }

  setSatus8(id: number): Observable<NotificationDTO> {
    return this.http.get<NotificationDTO>(API_URL + '/setSatus8/' + id);
  }

  sendAdmin(id_NDDV: any) {
    this.stompClient.send(
      '/gkz/sendAdmin',
      {},
      JSON.stringify({'id_CCDV': 1, 'id_NDDV': id_NDDV, 'id_Notification': 0, 'money': 0})
    );
  }

  setSatus13(id: number): Observable<NotificationDTO> {
    return this.http.get<NotificationDTO>(API_URL + '/setSatus13/' + id);
  }

  setSatus14(id: number): Observable<NotificationDTO> {
    return this.http.get<NotificationDTO>(API_URL + '/setSatus14/' + id);
  }

  answerUser(id_CCDV: any, id_NDDV: any) {
    this.stompClient.send(
      '/gkz/answerUser',
      {},
      JSON.stringify({'id_CCDV': id_CCDV, 'id_NDDV': id_NDDV, 'id_Notification': 0, 'money': 0})
    );
  }

  answerUser1(id_CCDV: any, id_NDDV: any) {
    this.stompClient.send(
      '/gkz/answerUser1',
      {},
      JSON.stringify({'id_CCDV': id_CCDV, 'id_NDDV': id_NDDV, 'id_Notification': 0, 'money': 0})
    );
  }

  comment(id: any, star: any, comment: any): Observable<Comment> {
    return this.http.get<Comment>(API_URL + '/comment/' + id + '&&' + star + '&&' + comment);
  }
}
