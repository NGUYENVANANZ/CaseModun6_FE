import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppComponent} from "../../app.component";
// import {Stomp} from "@stomp/stompjs";
import {LoginService} from "../../service/login/login.service";
import {SocketService} from "../../service/Socket/socketService";
// import {SocketService} from "../../service/Socket/socketService";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit{
  title = 'grokonez';
  description = 'Angular-WebSocket Demo';
  message: string = "";

  greetings: string[] = ["hhhh", 'ddddd'];
  disabled = true;
  name: string | undefined;
  stompClient: any


  constructor(private login: LoginService, private socket: SocketService) {
    this.stompClient = socket.stompClient;
  }

  userName = this.login.getUserName();


  sendName() {
    this.socket.sendName(this.name, this.message);
  }

  showGreeting() {
    let url = '/topic/' + this.userName;
    const  _this = this;
      this.stompClient.subscribe(url,function (hello: any) {
        console.log(JSON.parse(hello.body).greeting)
          _this.greetings.push(JSON.parse(hello.body).greeting);
      });
  }


  ngOnInit(): void {
    this.showGreeting()
  }

}


