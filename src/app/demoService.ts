import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL:'https://jsonplaceholder.typicode.com/';

  products=[
    {name:'Laptop',id:'101'},
    {name:'Mobile',id:'102'},
    {name:'Tv',id:'103'}
  ]

  constructor(private http: HttpClient) { }


  getUsersData(){
   return this.http.get(this.apiURL);
  }
}
