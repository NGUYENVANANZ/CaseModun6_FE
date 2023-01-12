import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppComponent} from "../../app.component";
import {Stomp} from "@stomp/stompjs";
import {LoginService} from "../../service/login/login.service";
import {SocketService} from "../../service/Socket/socketService";

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

  constructor(private login: LoginService, private socket: SocketService) {
  }

  userName = this.login.getUserName();


  sendName() {
    this.socket.sendName(this.name, this.message);
  }

  showGreeting() {
    console.log(this.socket.getSend(this.userName))
    this.greetings.push(this.socket.getSend(this.userName));
  }


  ngOnInit(): void {
    this.showGreeting()
  }

}


