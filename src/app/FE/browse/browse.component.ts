import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {DetailAccount} from "../model/DetailAccount";
import {SearchService} from "../../service/search/search.service";
import {LoginService} from "../../service/login/login.service";
import {DetailAccountSart} from "../model/DTO/DetailAccountSart";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnChanges {
  fullName!: DetailAccountSart[];
  nameSearch !: string;


  constructor(private searchService: SearchService, private loginService: LoginService) {
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
    this.searchService.showAll().subscribe((data) => {
      this.fullName = data;
    })
  }

  search() {
    if (this.nameSearch == ""){
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

  logOut(){
    this.loginService.logOut();
  }

  check(n : string){
    // @ts-ignore
    document.getElementById(n).hidden = false;

  }

  check1(n : string){
    // @ts-ignore
    document.getElementById(n).hidden = true;
  }

}
