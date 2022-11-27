import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  serverName :string = "Sachin Sharma";
  allowData = true;
  dataStatus:string = 'Please enter name';
  serverstatus:string = 'please enter valid UserName.'

  getServerStatus() {
    if (this.serverName!="string") {
      return this.serverstatus;
    }
    
  }

  onCreateServer(){
    this.serverName = " "
  }
}
