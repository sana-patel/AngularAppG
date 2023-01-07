import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  
  // users(){
  //   return [
     
  //      { name:'Riza' ,age:'8 years', email:'riza@gmail.com'},
  //       {name:'Riya' ,age:'9 years', email:'riya@gmail.com'},
  //       {name:'Ritu' ,age:'11 years', email:'ritu@gmail.com'},

      
  //   ]
  // }
  

  constructor(private httpClient:HttpClient) { }

  getPost(): Observable<any>{
    return this.httpClient.get(`${devAPIUrl}users`);
  }
  getPostById(id){
    return this.httpClient.get(`${devAPIUrl}users/`+ id)
  }
  deletepostById(id){
 return this.httpClient.delete(`${devAPIUrl}users/`+ id)
  }
}
