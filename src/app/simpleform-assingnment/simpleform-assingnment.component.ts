import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleform-assingnment',
  templateUrl: './simpleform-assingnment.component.html',
  styleUrls: ['./simpleform-assingnment.component.css']
})
export class SimpleformAssingnmentComponent implements OnInit {

  getUserValue(value){
    console.log(value);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
