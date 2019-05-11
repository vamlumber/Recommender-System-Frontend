import { Component, OnInit } from '@angular/core';
import {AppHeaderComponent} from '../app-header/app-header.component'
import {HomeService} from '../services/home.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Book} from '../services/book_interface'
import {MatSnackBar} from '@angular/material';
import { Genre } from '../services/genre_interface';

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
  genre_result:Genre;
  genre_score:Genre;
  classiferText:string =""
  classifer_result=""
  classificationApplied:boolean = false
  
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
    }else{
      
      this.router.navigate(['/search',{data:this.search}]); 
    }
  }
  classifyText(){
    if(this.classiferText.length == 0){
      this.snackBar.open("Empty String","ok",{duration: 2 * 1000});
      return 
    }else{
      this.homeService.getClassification(this.classiferText).subscribe(claifObj =>{
        console.log(claifObj)
        this.genre_result = claifObj['resultant']
        this.genre_score = claifObj['result']
        this.classifer_result = ""
        this.getGenre(this.genre_result)
        this.classificationApplied = true
      },err=>{
        this.snackBar.open("An error occured","ok",{duration: 2 * 1000});
      }) 
    }
  }
  getGenre(gnre:Genre){
    if(gnre.adult=='1'){
      this.classifer_result += "adult, "
    }
    if(gnre.biography=='1'){
      this.classifer_result += "biography, "
    }
    if(gnre.children=='1'){
      this.classifer_result += "children, "
    }
    if(gnre.comics=='1'){
      this.classifer_result += "comics, "
    }
    if(gnre.crime=='1'){
      this.classifer_result += "crime, "
    }
    if(gnre.fantasy=='1'){
      this.classifer_result += "fantasy, "
    }
    if(gnre.graphics=='1'){
      this.classifer_result += "graphics, "
    }
    if(gnre.history=='1'){
      this.classifer_result += "history, "
    }
    if(gnre.mystery=='1'){
      this.classifer_result += "mystery, "
    }
    if(gnre.paranormal=='1'){
      this.classifer_result += "paranormal, "
    }
    if(gnre.poetry=='1'){
      this.classifer_result += "poetry, "
    }
    if(gnre.romance=='1'){
      this.classifer_result += "romance, "
    }
    if(gnre.thriller=='1'){
      this.classifer_result += "thriller, "
    }
    if(gnre.young=='1'){
      this.classifer_result += "young, "
    }
 
  }

}
