import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {DetailAccount} from "../model/DetailAccount";
import {SearchService} from "../../service/search/search.service";
import {LoginService} from "../../service/login/login.service";
import {DetailAccountSart} from "../model/DTO/DetailAccountSart";
import {SocketService} from "../../service/Socket/socketService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnChanges {
  fullName!: DetailAccountSart[];
  fullNameRoot: DetailAccountSart[] = this.fullName;
  nameSearch !: string;
  S: number = 1;
  stompClient: any;
  listSearch: DetailAccountSart[] = [];
  gender!: string;
  city!:string;
  price!:number
  constructor(private searchService: SearchService, private loginService: LoginService,private router:Router, private socket: SocketService) {
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
        this.fullNameRoot = data;

      })
    } else {
      // @ts-ignore
      this.searchService.showSearch(this.searchx).subscribe((data) => {
        this.fullName = data;
        this.fullNameRoot = data;
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
        this.fullNameRoot = data;
      })
      return;
    }
    this.searchService.showSearch(this.nameSearch).subscribe((data) => {
      this.fullName = data;
      this.fullNameRoot = data;
    })
    console.log(this.fullName)
  }


    filterNam(){
   // this.fullName = this.fullNameRoot;
     this.fullName=this.fullName.filter(star => star.gender == 'Nam');
   console.log(this.fullName)
    }

  filterNu(){
    console.log("clicked");
    // this.fullName = this.fullNameRoot;
    this.fullName=this.fullName.filter(star => star.gender == 'Nữ');
    console.log(this.fullName)
  }

  filterCity(city: string){
    // this.fullName = this.fullNameRoot;
    this.fullName=this.fullName.filter(star => star.city == city)
    console.log(this.fullName)
  }

  // filterCity1(city: string){
  //   this.fullName = this.fullNameRoot;
  //   this.fullName=this.fullName.filter(star => star.city.includes(city))
  //   console.log(this.fullName)
  // }


  filterByPrice(price:string){
    // this.fullName = this.fullNameRoot;
    this.fullName=this.fullName.filter(star => star.price >= Number(price))
    console.log(this.fullName)
  }


  reloadPage() {
    this.searchService.showAll().subscribe((data) => {
      this.fullName = data;
      this.gender = ""
      this.city = ""
      this.price = 0
    })
    return;
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

  // @ts-ignore
  onInput(event) {
    localStorage.setItem("search", event.target.value)
    this.router.navigate(["/browse"]);
  }

  // searchFilter(
  //   // gender:string,
  //   // birthday:number,
  //   // city:string
  // ){if (this.gender == ""){
  //   this.searchService.searchByAll(this.gender,this.birthday,this.city).subscribe((data)=> {
  //     this.listSearch = data;
  //   })
  //   return;
  // this.searchService.searchByAll(gender, birthday, city).subscribe((data) =>{
  //   this.listSearch = data;
  //   for (let i = 0; i < this.listSearch.length; i++) {
  //
  //   }
  //   this.searchService.searchByAll(this.gender,this.birthday,this.city).subscribe((data) =>{
  //     this.listSearch = data;
  //   })
  // console.log(this.listSearch)
  // }
}
