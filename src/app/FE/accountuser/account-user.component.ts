import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DetailAccountSart} from "../../FE/model/DTO/DetailAccountSart";
import {Star} from "../../FE/model/DTO/Star";
import {Hires} from "../../FE/model/DTO/Hires";
import {HomeService} from "../../service/home/home.service";
import {DetailAccount} from "../../FE/model/DetailAccount";
import {LoginService} from "../../service/login/login.service";
import {AdminService} from "../../service/Admin/admin.service";
import {SearchService} from "../../service/search/search.service";
import {AccountDTO} from "../../FE/model/DTO/AccountDTO";
import {UserToken} from "../../FE/model/DTO/UserToken";
import {TYPE} from "../admin/values.constants";
import Swal from "sweetalert2";


@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css']
})
export class AccountUserComponent implements OnInit,OnChanges {
  S: number = 1
  idaccount!:number;
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
    if (this.token != "") {
      // @ts-ignore
      document.getElementById("logout").hidden = false;
    }
    this.adminService.showallAccount().subscribe((data) => {
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

  Vip(vip: number,id: number){
    this.adminService.SetVip(vip, id).subscribe((data) => {
      this.detailAccount = data;
      this.adminService.showallAccount().subscribe((data) => {
        this.account = data;
      })
    })
  }
  logOut() {
    this.loginService.logOut();
  }

  click(n : number){
    this.idaccount = n;
  }

  NapTienhihi(id:number, money: any){
    this.adminService.NapTien(id,money).subscribe((data) =>{
      this.detailAccount = data;
      this.adminService.showallAccount().subscribe((data) => {
        this.account = data;
      })
    })
  }
  show2(typeIcon = TYPE.SUCCESS) {
    Swal.fire({
      title: 'Nạp tiền thành công !',
      icon: typeIcon,
      confirmButtonText: 'ok'
    });
  }
}
