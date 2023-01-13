import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {DetailAccount} from "../model/DetailAccount";
import {SearchService} from "../../service/search/search.service";
import {LoginService} from "../../service/login/login.service";
import {DetailAccountSart} from "../model/DTO/DetailAccountSart";
import {SocketService} from "../../service/Socket/socketService";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnChanges {
  fullName!: DetailAccountSart[];
  nameSearch !: string;
  S: number = 1
  stompClient: any

  constructor(private searchService: SearchService, private loginService: LoginService, private socket: SocketService) {
    this.stompClient = socket.stompClient;
  }

  token = this.loginService.getToken();
  img = this.loginService.getImg();
  searchx = localStorage.getItem("search")

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    if (this.token != "") {
      // @ts-ignore
      document.getElementById("logout").hidden = false;
    }
    if (this.searchx == "") {
      this.searchService.showAll().subscribe((data) => {
        this.fullName = data;
      })
    } else {
      // @ts-ignore
      this.searchService.showSearch(this.searchx).subscribe((data) => {
        this.fullName = data;
      })
    }
    // @ts-ignore
    this.nameSearch = this.searchx;
    localStorage.setItem("search", "")
  }

  search() {
    if (this.nameSearch == "") {
      this.searchService.showAll().subscribe((data) => {
        this.fullName = data;
      })
      return;
    }
    this.searchService.showSearch(this.nameSearch).subscribe((data) => {
      this.fullName = data;
    })
    console.log(this.fullName)
  }

  logOut() {
    this.loginService.logOut();
  }

  check(n: string) {
    // @ts-ignore
    document.getElementById(n).hidden = false;

  }

  check1(n: string) {
    // @ts-ignore
    document.getElementById(n).hidden = true;
  }

}
