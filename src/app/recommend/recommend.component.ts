import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras,ParamMap,} from '@angular/router';
import {HomeService} from '../services/home.service'
import { Book } from '../services/book_interface';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  book:Book;
  books:Array<Book>
  books1:Array<Book>
  books2:Array<Book>
  books3:Array<Book>
  gotBook:boolean = false
  foundBooks:boolean = false
  constructor(private router:Router,private route:ActivatedRoute,private homeS:HomeService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    let xc = this.route.snapshot.params['book_id']
    console.log(typeof(xc.toString()),"hello")
    this.homeS.getBook(xc.toString()).subscribe(obj_book =>{
      console.log(obj_book)
      this.book = obj_book['result']
      this.gotBook = true
      this.homeS.getRecommendation(this.book['all_text']).subscribe(recommendObejct=>{
      console.log(recommendObejct)
      this.foundBooks = true
      this.books = recommendObejct["result"]
      this.books1 = this.books.slice(1,4)
      this.books2 = this.books.slice(4,7)
      this.books3 = this.books.slice(7,10)
      },err=>{
        this.snackBar.open("An error occured try again","ok",{duration: 2 * 1000});  
      })
    },err =>{
      this.snackBar.open("An error occured try again","ok",{duration: 2 * 1000});
    })
  }

}
