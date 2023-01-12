import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProfileService} from "../../service/profileUser/profile.service";
import {LoginService} from "../../service/login/login.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit, OnChanges {
  constructor(private loginService: LoginService, private router : Router) {
  }

  token = this.loginService.getToken();
  img = this.loginService.getImg();

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    if (this.token != "") {
      // @ts-ignore
      document.getElementById("logout").hidden = false;
    }
  }

  // @ts-ignore
  onInput(event) {
    localStorage.setItem("search", event.target.value)
    this.router.navigate(["/browse"]);
  }

}
