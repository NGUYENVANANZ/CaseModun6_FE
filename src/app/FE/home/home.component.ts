import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HomeService} from "../../service/home/home.service";
import {DetailAccountSart} from "../model/DTO/DetailAccountSart";
import {Star} from "../model/DTO/Star";
import {Hires} from "../model/DTO/Hires";
import {AccountService} from "../../service/account/account.service";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  newBie: DetailAccountSart[] = []
  Vip: DetailAccountSart[] = []
  Gender: DetailAccountSart[] = []
  star: Star[] = []
  hires: Hires[] = []



  constructor(private home: HomeService, private loginService : LoginService) {
  }

  img = this.loginService.getImg();
  token = this.loginService.getToken()

  ngOnChanges(changes: SimpleChanges): void {

    this.home.showNewbie().subscribe((data) => {
      this.newBie = data;
    })
    this.home.showVip().subscribe((data) => {
      this.Vip = data;
    })
    this.home.showGender().subscribe((data) => {
      this.Gender = data;
    })
    this.home.showSart().subscribe((data) => {
      this.star = data;
    })
    this.home.showHires().subscribe((data) => {
      this.hires = data;
    })
  }

  ngOnInit(): void {
    if (this.token != ""){
      // @ts-ignore
      document.getElementById("logout").hidden = false;
    }
    this.home.showNewbie().subscribe((data) => {
      this.newBie = data;
    })
    this.home.showVip().subscribe((data) => {
      this.Vip = data;
    })
    this.home.showGender().subscribe((data) => {
      this.Gender = data;
    })
    this.home.showSart().subscribe((data) => {
      this.star = data;
    })
    this.home.showHires().subscribe((data) => {
      this.hires = data;
    })
  }

  check(n : string){
      // @ts-ignore
      document.getElementById(n).hidden = false;

  }

  check1(n : string){
      // @ts-ignore
      document.getElementById(n).hidden = true;
  }

  logOut(){
    this.loginService.logOut();
  }
}
