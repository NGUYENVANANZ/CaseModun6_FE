import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
