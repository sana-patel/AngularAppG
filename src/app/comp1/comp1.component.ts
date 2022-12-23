import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from '../services/utility-service.service';
import{ UserdataService}  from '../services/userdata.service'
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 userName;
 users:any;
  constructor(private _userdata: UserdataService) {
    console.log('userdata',_userdata.users());
    this.users= _userdata.users();
   }

  ngOnInit() {
  }

}
