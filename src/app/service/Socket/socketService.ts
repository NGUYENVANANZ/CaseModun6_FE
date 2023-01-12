import {Stomp} from "@stomp/stompjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  title = 'grokonez';
  description = 'Angular-WebSocket Demo';

  mess !: string;
  public stompClient: any;


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
      JSON.stringify({'name': name, 'message': message})
    );
  }

  getSend(userName : any) : string{
    let url = '/topic/' + userName;
    const _this = this;
    this.stompClient.subscribe(url,function (hello: any) {
      _this.mess= JSON.parse(hello.body).greeting;
    });
    return this.mess
  }

}
