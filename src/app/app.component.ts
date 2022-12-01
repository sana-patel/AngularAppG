import { Component,OnInit} from '@angular/core';
// import { employee } from './models/movies';
// import { employee } from '../models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  public msg="";
  public msgObj="";
employeeRecords:any=[
 { 
  ename:'sana' ,ecity:"pune",esalary:"50000"},
  { 
    ename:'shital' ,ecity:"mumbai",esalary:"70000"},

]
 

 

    
   
        // this.products = this.getProducts();
    
   
//   foods: string[] = [];
//   getDataFromChild(value){
// console.log(value.targrt.value);

//   }
 
  foods: string[] = [];

  // getDataFromChild(value) {
  //   console.log(value);
  //   this.foods.push(value);
  // }
    prop :any = [];
  getDataFromChild(value){
    
    this.prop =value;
    console.log(this.prop);
    
  }

  constructor() { };

  ngOnInit() {
   
    
  };
  

}
