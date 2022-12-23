import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
todayDate= Date();
str :string='Angular web Developement'
user=
  { name:'Riza' ,age:'8 years', email:'riza@gmail.com'}


  constructor() { }

  ngOnInit() {
  }

}
