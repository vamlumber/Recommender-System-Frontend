import { Component, OnInit } from '@angular/core';
import {AppHeaderComponent} from '../app-header/app-header.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search:string;
  constructor() { }

  ngOnInit() {
  }
  

  searchIt(){
    console.log("searchIt");
  }

}
