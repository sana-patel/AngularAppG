import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url = 'https://console.firebase.google.com/project/angular-learning-ec917/database/angular-learning-ec917-default-rtdb/data/~2F'
  constructor(private _httpClient :HttpClient) { }

  createPost(){
    let postData = {
      title:' This is Angular 8 CRUD',
      content:'This is firebase crud operation'
    }
   return this._httpClient.post(this.url,postData)
  }
}
