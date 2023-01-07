import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bbdata } from '../models/bbdata';

import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
  arrID:any=[];

  constructor(private _rapidapiService:RapidapiService ,private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this._rapidapiService.getDataBBFinance().subscribe(res =>{
      this.arrID= res
      console.log('rapid finance data',this.arrID.res);
      console.log(this.arrID.news);
      
    })


  }

}
