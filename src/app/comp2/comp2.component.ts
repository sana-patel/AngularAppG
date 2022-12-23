import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  users: any;

  constructor(private _userdata: UserdataService) { 
    console.log('userdata',_userdata.users());
    this.users= _userdata.users();
  }
  gateData(){
    this.users;
  }

  ngOnInit() {
  }

}
