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




  constructor(private searchService: SearchService, private accountService: AccountService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  search(name : string){
    this.searchService.showSearch(name).subscribe((data) => {
      this.fullName = data;
    })
  }

}
