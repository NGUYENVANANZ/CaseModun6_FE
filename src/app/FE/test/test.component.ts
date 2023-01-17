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
export class TestComponent implements OnInit {
  star: any = 5;

  test() {
    console.log(this.star)
  }

  ngOnInit(): void {
    this.showStar(this.star)
  }

  showStar(star: any) {
    if (!isNaN(this.star)) {
      const f = ~~star
      let id = 'star' + f + (this.star % f ? 'half' : '')
      // @ts-ignore
      id && (document.getElementById(id).checked = !0)
    }
  }
}


