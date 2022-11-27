import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

  isShow:boolean= true;

  isChecked : true;
  

  title:string="top 3 movies";
  // titles : string = "Top 3 Movies";
  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar', Cast: 'Amir', releaseDate: '2007' },
    { title: 'Kantara', director: 'Rishab', Cast: 'Rishab', releaseDate: '2022'},
    { title: 'KGF', director: 'RockBhai', Cast:'Yash', releaseDate: '2019'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
