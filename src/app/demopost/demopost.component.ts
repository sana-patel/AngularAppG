import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  constructor(private _UserdataService:UserdataService) { }
arrPosts:post[]=[]

  ngOnInit() {
    this._UserdataService.getPost().subscribe(res=>{
     
      this.arrPosts= res;
      console.log(`json user data`,this.arrPosts,res);
    })
  }

}
