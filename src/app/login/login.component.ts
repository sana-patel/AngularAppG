import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }
  checkuser(uname,password){

    var output=this._authService.checkUserNameandPassword(uname,password);
    if(output==true){
      window.alert('Login Successfully');
    }else{
      window.alert('Invalid username and password');
    }
  }
  
}
