import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() title:any
// @Input() disc:any
// @Input() url:any
// @Input() item=0
// @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
@Input() myData:string=''
@Input() myValue:string=""
@Output()public childEvent : EventEmitter<any> = new EventEmitter<any>(); 
// @Output() objChildEvent: EventEmitter<any> = new EventEmitter<any>(); 
// obj: {
//   fullName: string;
//   city: string;
//   age: number;
//   isMarried: boolean;
//   addresss: string;
// }

  obj = [{
  fullName :"Riza patel",
  city: "pune",
  age:10,
  isMarried:false,
  address:
       "AS club, 12345,pune,MH",
  hobby:"sketting",

  }];
  // childsEvent: any;
// fireEvent(){
//   this.childEvent.emit("Learning Never Ends")
// }
getDataFromChild(){
this.childEvent.emit(this.obj);

}

constructor() { }

ngOnInit() {
  console.log(this.obj);
}
}

