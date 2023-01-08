import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DetailAccountSart} from "../model/DTO/DetailAccountSart";
import {Star} from "../model/DTO/Star";
import {Hires} from "../model/DTO/Hires";
import {HomeService} from "../../service/home/home.service";
import {AccountService} from "../../service/account/account.service";

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css']
})
export class AccountUserComponent implements OnInit,OnChanges {

  newBie: DetailAccountSart[] = []
  Vip: DetailAccountSart[] = []
  Gender: DetailAccountSart[] = []
  star: Star[] = []
  hires: Hires[] = []


  constructor(private home: HomeService, private accountService: AccountService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.home.showNewbie().subscribe((data) => {
      this.newBie = data
    })
    this.home.showVip().subscribe((data) => {
      this.Vip = data
    })
    this.home.showGender().subscribe((data) => {
      this.Gender = data
    })
    this.home.showSart().subscribe((data) => {
      this.star = data
    })
    this.home.showHires().subscribe((data) => {
      this.hires = data
    })
  }


  ngOnInit(): void {
    this.home.showNewbie().subscribe((data) => {
      this.newBie = data
    })
    this.home.showVip().subscribe((data) => {
      this.Vip = data
    })
    this.home.showGender().subscribe((data) => {
      this.Gender = data
    })
    this.home.showSart().subscribe((data) => {
      this.star = data
    })
    this.home.showHires().subscribe((data) => {
      this.hires = data
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
