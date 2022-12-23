import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  
  users(){
    return [
     
       { name:'Riza' ,age:'8 years', email:'riza@gmail.com'},
        {name:'Riya' ,age:'9 years', email:'riya@gmail.com'},
        {name:'Ritu' ,age:'11 years', email:'ritu@gmail.com'},

      
    ]
  }

  constructor() { }
}
