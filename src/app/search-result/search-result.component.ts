import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../services/book_interface';
import { Router, ActivatedRoute,NavigationExtras,ParamMap,} from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import {HomeService} from '../services/home.service'
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  // booksObs:Observable<Array<Book>>;
  books:Array<Book>
  books1:Array<Book>
  books2:Array<Book>
  books3:Array<Book>
  querfg:string;
  constructor(private route:ActivatedRoute,private router:Router,private homeService:HomeService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    let x:any = this.route.snapshot.paramMap.get("data")
    console.log(x)
    this.querfg = x
    x = x.split(' ')
    x = x.join('_')
    x = encodeURI(x);
    console.log(x)
    this.homeService.getSearchItems(x).subscribe(searchedObject =>{
      console.log(typeof(searchedObject));
      console.log(searchedObject);
      // let rev = eval(searchedObject)
      // let rev = JSON.parse(searchedObject);
      this.books = searchedObject['result']
      console.log(searchedObject['books'])
      // let cosi:any = searchedObject['cosi']
      // let query:string = searchedObject['query']
      this.books1 = this.books.slice(0,3)
      this.books2 = this.books.slice(3,6)
      this.books3 = this.books.slice(6,9)
    },err =>{
      console.log(err)
      this.snackBar.open("An error occured try again","ok",{duration: 2 * 1000});
    })
    
  }
  selectedBook(bo:Book){
      console.log(bo)
      this.router.navigate(['/recommend',{'book_id':bo['book_id']}]);
  }

}
