import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DetailAccountSart} from "../model/DTO/DetailAccountSart";
import {Star} from "../model/DTO/Star";
import {Hires} from "../model/DTO/Hires";
import {HomeService} from "../../service/home/home.service";
import {DetailAccount} from "../model/DetailAccount";
import {LoginService} from "../../service/login/login.service";
import {AdminService} from "../../service/Admin/admin.service";
import {SearchService} from "../../service/search/search.service";
import {AccountDTO} from "../model/DTO/AccountDTO";
import {UserToken} from "../model/DTO/UserToken";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnChanges {
  S: number = 1
  account: AccountDTO[] = [];
  fullName!: AccountDTO[];
  detailAccount!: DetailAccount[];

  constructor(private adminService: AdminService, private loginService: LoginService) {
  }

  img = this.loginService.getImg();
  token = this.loginService.getToken();

  ngOnChanges(changes: SimpleChanges): void {
    this.adminService.showallAccount().subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }

  ngOnInit(): void {
    if (this.token != "") {
      // @ts-ignore
      document.getElementById("logout").hidden = false;
    }
    this.adminService.showallAccounts3().subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }

  lock1(id : number){
    this.adminService.lock1(id).subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }

  unlock1(id : number){
    this.adminService.unlock1(id).subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }


  check(n: string) {
    // @ts-ignore
    document.getElementById(n).hidden = false;

  }

  check1(n: string) {
    // @ts-ignore
    document.getElementById(n).hidden = true;
  }

  checkVip(vip: number) {
    if (vip == 0) {
      // @ts-ignore
      document.getElementById("manh").hidden = false;
    }
  }

  logOut() {
    this.loginService.logOut();
  }

}
