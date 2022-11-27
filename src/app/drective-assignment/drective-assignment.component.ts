import { Component, OnInit } from '@angular/core';
import { Book } from '../models/movies';

@Component({
  selector: 'app-drective-assignment',
  templateUrl: './drective-assignment.component.html',
  styleUrls: ['./drective-assignment.component.css'],
})


export class DrectiveAssignmentComponent implements OnInit {

  isChecked =true

  title:string="three best books.";
  // titles : string = "Top 3 Movies";
  books: Book [] = [
    { title: 'The Power of Positive Thinking', Author: 'RNorman Vincent Peale'
    , Cost: '1000rs.', publishedDate: '2007' },
    { title: 'Think and Grow Rich', Author: 'Napoleon Hill'
    , Cost: '1000rs', publishedDate: '2022'},
    { title: 'Learning How to Fly: Life Lessons for the Youth', Author: '	A.P.J. Abdul Kalam', Cost:'1500rs', publishedDate: '2019'}
  ]

  selectedProduct: string;
  constructor() { }

  ngOnInit() {
   
  }
  getProductValue(value) {
    console.log(value.target.value);
    this.selectedProduct = value.target.value;
  }

}
