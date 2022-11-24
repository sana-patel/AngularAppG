import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  name:string = 'codeminnd';
  serverId: number = 37;
  serverstatus:string = 'offline';
  allowNewServer = true;
  imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201';

  serverCreationStatus : string = 'server not Created';
  serverName :string = "codemind.com"
constructor(){
setTimeout(() => {
  this.allowNewServer = false
  
},5000);

}

  getServerStatus() {
    return this.serverstatus;
  }
  onCreateServer(){
   this.serverCreationStatus= 'Server Created' 
  }
  // onCreateServer(){
  //   this.serverCreation
  // }

}


