import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {SearchService} from "../../service/search/search.service";
import {DetailAccount} from "../model/DetailAccount";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnChanges {
fullName: DetailAccount[] = [];



  constructor(public search: SearchService, private accountService: AccountService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.search.showSearch().subscribe((data) => {
      this.fullName = data;
    })
  }

  ngOnInit(): void {
    this.accountService.setToken("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbiIsImlhdCI6MTY3MjkyODQzMywiZXhwIjo4ODA3MjkyODQzM30.bt5s0eTZLtvKYTbcqs2wsYTIZJzBXdat-PnDqv856NagTTSMxSF9yRWwc-OgcrcPN1fIuCVEgSK0N_NVtg8Pcg")
    this.search.showSearch().subscribe((data) => {
      this.fullName = data;
    })
  }

}
