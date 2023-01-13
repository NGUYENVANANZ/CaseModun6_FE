import {Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
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
import Swal from "sweetalert2"
import { TYPE } from "./values.constants";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit,OnChanges {
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
    this.adminService.showallAccount().subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })
  }

  ngOnInit(): void {
    this.adminService.showallAccounts3().subscribe((data) => {
      // @ts-ignore
      this.account = data;
    })

  }

  show(typeIcon = TYPE.SUCCESS) {
    Swal.fire({
      title: 'Cấp Vip thành công!',
      text: 'Do you want to continue',
      icon: typeIcon,
      confirmButtonText: 'ok'
    });
  }

  show1(typeIcon = TYPE.SUCCESS) {
    Swal.fire({
      title: 'Khóa tài khoản thành công!',
      text: 'Do you want to continue',
      icon: typeIcon,
      confirmButtonText: 'ok'
    });
  }

  show2(typeIcon = TYPE.SUCCESS) {
    Swal.fire({
      title: 'Nạp tiền thành công !',
      text: 'Do you want to continue',
      icon: typeIcon,
      confirmButtonText: 'ok'
    });
  }

  logOut(){
    this.loginService.logOut();
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

  click(n : number){
    this.idaccount=n;
  }

  NapTienhihi(id:number, money: any){
    this.adminService.NapTien(id,money).subscribe((data) =>{
      this.detailAccount = data;
      this.adminService.showallAccount().subscribe((data) => {
        this.account = data;
      })
    })
  }


  Vip(vip: number, id: number){
    this.adminService.SetVip(vip, id).subscribe((data) => {
      this.detailAccount = data;
      this.adminService.showallAccount().subscribe((data) => {
        this.account = data;
      })
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

}
