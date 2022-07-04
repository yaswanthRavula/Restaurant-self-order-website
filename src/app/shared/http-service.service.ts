import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

 

  constructor( private httpCLient:HttpClient) { }
  
  get(url:string):Observable<Item[]>{
    return this.httpCLient.get<Item[]>(url);
  }
  post(url:string, item:Item){
    return this.httpCLient.post(url,item);
  }
}
