import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templetdriven-form-ass',
  templateUrl: './templetdriven-form-ass.component.html',
  styleUrls: ['./templetdriven-form-ass.component.css']
})
export class TempletdrivenFormAssComponent implements OnInit {
  userLogin(item:any){
    console.warn(item);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
