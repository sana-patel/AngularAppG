import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demoService';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {
 
  products={};
  constructor(private _demoService:DemoService) { }

  ngOnInit() {
    this.products=this._demoService.products;
  }
  onSubscribe(){
    alert('servicecomp1 subscribed')
  }

}
