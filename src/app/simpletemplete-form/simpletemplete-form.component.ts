import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-simpletemplete-form',
  templateUrl: './simpletemplete-form.component.html',
  styleUrls: ['./simpletemplete-form.component.css']
})
export class SimpletempleteFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
    console.log(form);
      }

}
