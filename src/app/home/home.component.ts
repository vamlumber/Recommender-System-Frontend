import { Component, OnInit } from '@angular/core';
import {AppHeaderComponent} from '../app-header/app-header.component'
import {HomeService} from '../services/home.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Book} from '../services/book_interface'
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search:string = "";
  items:Array<Book>;
  items1:Array<Book>;
  items2:Array<Book>;
  
  constructor(private homeService:HomeService,private router:Router,private route:ActivatedRoute,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.homeService.getItems().subscribe(data =>{
      console.log(eval(data));
      this.items = eval(data);
      this.items1 = this.items.slice(0,3)
      console.log(this.items1)
      this.items2 = this.items.slice(3,6)   
      console.log(this.items2) 
    })
  }
  

  searchIt(){
    if(this.search.length == 0){
      this.snackBar.open("Empty String","ok",{duration: 2 * 1000});
      return 
    }
    this.homeService.getSearchItems(this.search.replace(" ","_")).subscribe(searchedObject =>{
      console.log(searchedObject);
    this.router.navigate(['/search',{data:searchedObject}]);
    })
  }

}
