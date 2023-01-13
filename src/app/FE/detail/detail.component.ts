import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {DetailAccount} from "../model/DetailAccount";
import {ActivatedRoute, Router} from "@angular/router";
import {DetailService} from "../../service/detail/detail.service";
import Swal from "sweetalert2";
import {SocketService} from "../../service/Socket/socketService";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  detail: DetailAccount = {
    id: 0,
    city: "",
    nation: "",
    gender: "",
    height: 0,
    weight: 0,
    soThich: "",
    moTa: "",
    yeuCau: "",
    fullName: "",
    birthday: new Date(1 - 1 - 1111),
    joinDate: new Date(1 - 1 - 1111),
    money: 0,
    img: "",
    imgs: [],
    provideds: [],
    comments: [],
    pricePerDay: 0,
    faceLink: "",
    status: 0,
    vip: 0,
    roles: []
  }

  id: any;
  star: any = 0;
  hires: any = 0;
  stompClient: any;
  value: any = 5;
  money: any

  constructor(private detailAPI: DetailService, private loginService: LoginService, private router: ActivatedRoute, private socket: SocketService, private routerx: Router) {
    this.stompClient = socket.stompClient;
  }


  img = this.loginService.getImg();
  idx = localStorage.getItem("id");

  logOut() {
    this.loginService.logOut();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      if (this.idx == this.id) {
        this.routerx.navigate(["/profile"])
        return;
      }
      this.detailAPI.detail(this.id).subscribe((data) => {
        this.detail = data
        let x = 0;
        for (let i = 0; i < this.detail.comments.length; i++) {
          x += this.detail.comments[i].star
        }
        this.star = x / this.detail.comments.length
        this.showStar(this.star)
        this.money = this.value * this.detail.pricePerDay;
      })
      this.detailAPI.hires(this.id).subscribe((data) => {
        if (data != null) {
          this.hires = data.hires
        }
      })
    })

  }

  showStar(star: any) {
    if (!isNaN(this.star)) {
      const f = ~~star
      let id = 'star' + f + (this.star % f ? 'half' : '')
      // @ts-ignore
      id && (document.getElementById(id).checked = !0)
    }
  }

// @ts-ignore
  onInput(event) {
    localStorage.setItem("search", event.target.value)
    this.routerx.navigate(["/browse"]);
  }

  clickHires(id: number) {
    if (this.money != 0){
      if (this.detail.money >= this.money){
        this.socket.sendNotification1(id, localStorage.getItem("id"), 0, this.money)
        this.routerx.navigate(["/home"])
      }else {
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: "info",
          timerProgressBar : true,
          timer: 5000,
          title: 'Số dư hiện tại của bạn không đủ'
        })
      }
    }else {
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: "info",
        timerProgressBar : true,
        timer: 5000,
        title: 'Vui lòng chọn thời gian thuê'
      })
    }
  }

  changevValue(){
    this.money = this.value * this.detail.pricePerDay;
  }

}
