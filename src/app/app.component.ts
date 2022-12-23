import { Component,OnInit} from '@angular/core';
import { DemoService } from './demoService';
// import { employee } from './models/movies';
// import { employee } from '../models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
products={}
  // apiURL:{};
  
  constructor(private _demoService:DemoService){


  }

  ngOnInit():void {
   this._demoService.getUsersData().subscribe(data=>{
    console.log('getting data from api',data);
    
   })

  //  this.apiURL= this._demoService.apiURL;
    
  };

  title = 'angularapp';
  public  uid :number;
 
employeeRecords:any=[
 { 
  ename:'sana' ,ecity:"pune",esalary:"50000"},
  { 
    ename:'shital' ,ecity:"mumbai",esalary:"70000"},

]
 
name = "sana patel"



    
   
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

 

 
  

}
