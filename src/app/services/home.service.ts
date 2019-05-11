import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url="https://recommender-system-233819.appspot.com"
  search = "/search/"
  bok ="/getbook/"
  recommend ="/recommend"
  classify="/classify"
  constructor(private http:HttpClient) { }

  getItems(){
    return this.http.get(this.url,{responseType: 'text'});
  }

  getSearchItems(query){
    // let heade = new HttpHeaders({"Access-Control-Allow-Methods":"GET, POST, DELETE, PUT",})
    // heade = heade.append('content-type', 'application/json');
    // heade = heade.append('Access-Control-Allow-Headers','*')
    return this.http.get(this.url+this.search+query,{responseType:'json'});
  }
  getBook(query){
    return this.http.get(this.url+this.bok+query,{responseType:'json'})
  }
  getRecommendation(text:string){
    return this.http.post(this.url+this.recommend,{'all_text':text},{responseType:'json'})
  }
  getClassification(cText){
    return this.http.post(this.url+this.classify,{'all_text':cText},{responseType:'json'})
  }
}
