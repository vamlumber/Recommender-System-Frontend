import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url="http://localhost:5000/search/"
  constructor(private http:HttpClient) { }

  getSearchItems(query){
    return this.http.get(this.url+query);
  }
}
