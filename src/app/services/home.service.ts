import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url="https://recommender-system-233819.appspot.com"
  search = "/search/"
  constructor(private http:HttpClient) { }

  getItems(){
    return this.http.get(this.url,{responseType: 'text'});
  }

  getSearchItems(query){
    return this.http.get(this.url+this.search+query,{responseType:'text'});
  }
}
