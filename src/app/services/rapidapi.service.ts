import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
 url = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple'
  constructor(private httpClient:HttpClient) { }
  getDataBBFinance(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Host':'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key' : '7c085aacc6msha2cabf6c9a941ecp179ca3jsn1ea3b0184108',
    })
   return this.httpClient.get(this.url,{headers:headers})
  }
}
