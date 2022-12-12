import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employee } from '../models/movies';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  employee = new employee();
  submitted: boolean = false;
defaultGender:string='female'
defaultValue:string='Angular'
 genders=[
  {id:'1',value: 'male'},
  {id:'2',value: 'Female'}
 ]
  constructor() { }

  ngOnInit() {
  }
//   OnSubmit(form:NgForm) {
// // console.log(form.value);
// // console.log(form.value.userDetails.username);
// // console.log(form.value.userDetails.email)
// // console.log(form.value.userDetails.course)

// var emp=new employee();
// emp.course = form.value.course;
// emp. username=form.value.userDetails.username;
// emp.email=form.value.userDetails.email
// this.saveEmployeeData(form)
//   }

//   saveEmployeeData(form:NgForm){
//     console.log();
//     console.log(form.value);
// console.log(form.value.userDetails.username);
// console.log(form.value.userDetails.email)
// console.log(form.value.userDetails.course)
//   }
// }
// OnSubmit(form:NgForm) {
//   this.submitted = true;
//   this.employee .course = form.value.course;
//   this.employee .username = form.value.userDetails.username;
//   this.employee .email = form.value.userDetails.email;
//   this.employee.gender= form.value.gender;
//   form.reset();
//   form.controls}

//  this.saveEmployeeData(this.employee);
// }

// // saveEmployeeData(emp:Employee) {
// //  console.log(emp.courses);
// // }
}
