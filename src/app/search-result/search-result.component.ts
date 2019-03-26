import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../services/book_interface';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let x:any = this.route.snapshot.paramMap.get("data")
    console.log(eval(x))
    this.books = eval(x)
    this.books1 = this.books.slice(0,3)
    this.books2 = this.books.slice(3,6)
    this.books3 = this.books.slice(6,9)
  }

}
