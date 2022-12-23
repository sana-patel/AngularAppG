import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl } from '@angular/forms';




@Component({
  selector: 'app-simpleform-assingnment',
  templateUrl: './simpleform-assingnment.component.html',
  styleUrls: ['./simpleform-assingnment.component.css']
})
export class SimpleformAssingnmentComponent implements OnInit {
  defaultValue:string = "Select Room"

  emailPattern = "^[a-z0-9._%+-]+@domain.[a-z]{2,4}$"; 
  minDate:any ="2022-12-10"
 getDate(){
  var date: any= new Date() 
  var toDate :any =date.getDate()
  if(toDate< 10){
    toDate = "0"+toDate
  }
  var month:any =date.getMonth()+1;
  if(month<10){
    month="0"+month;
  }

  console.log(date);
  
 }


  getUserValue(value){
    console.log(value);
    
  }

  ngOnInit(): void {
    
  }
}

