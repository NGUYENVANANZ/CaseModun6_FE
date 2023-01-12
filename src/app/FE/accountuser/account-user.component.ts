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
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css']
})
export class AccountUserComponent implements OnInit,OnChanges {
  S: number = 1
  account: AccountDTO[] = [];
  fullName!: AccountDTO[];
  detailAccount!: DetailAccount;

  constructor(private adminService: AdminService, private loginService: LoginService) {
  }

  img = this.loginService.getImg();
  token = this.loginService.getToken();

  ngOnChanges(changes: SimpleChanges): void {
    this.adminService.showallAccounts3().subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }

  ngOnInit(): void {
    // if (this.token != "") {
    //   // @ts-ignore
    //   document.getElementById("logout").hidden = false;
    // }
    this.adminService.showallAccounts3().subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }

  lock(id : number){
    this.adminService.lock(id).subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }

  unlock(id : number){
    this.adminService.unlock(id).subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }

  Vip(vip: number,account_id: number){
    this.adminService.SetVip(vip,account_id).subscribe((data) => {
      this.detailAccount = data;
      this.adminService.showallAccount().subscribe((data) => {
        this.account = data;
      })
    })

  }
}
