import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../models/post';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private _UserdataService : UserdataService,private route:ActivatedRoute) { }
  arrId:any=[];
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    // this. _userdata.getPostById(id).subscribe(res =>{
    //   console.log(`Get post by id`,res);
      
    // })
    this._UserdataService.getPostById(id).subscribe(result=>{
      // this.arrId=res;
      this.arrId = result
      console.log(`Get post by id`,this.arrId,result);
      
    })
  }

}
// this._UserdataService.getPost().subscribe(res=>{
     
//   this.arrPosts= res;
//   console.log(`json user data`,this.arrPosts,res);