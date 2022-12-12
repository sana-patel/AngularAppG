import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl } from '@angular/forms';




@Component({
  selector: 'app-simpleform-assingnment',
  templateUrl: './simpleform-assingnment.component.html',
  styleUrls: ['./simpleform-assingnment.component.css']
})
export class SimpleformAssingnmentComponent implements OnInit {
  defaultValue:string = "Select Room"

  emailPattern = "^[a-z0-9._%+-]+@domain.[a-z]{2,4}$"; 
  minDate:any ="2022-12-10"
 getDate(){
  var date: any= new Date() 
  var toDate :any =date.getDate()
  if(toDate< 10){
    toDate = "0"+toDate
  }
  var month:any =date.getMonth()+1;
  if(month<10){
    month="0"+month;
  }

  console.log(date);
  
 }


  getUserValue(value){
    console.log(value);
    
  }

//   employeeForm:FormGroup;
//   formError={
//     'email':''
//   }
//   validationMassages={
//   'email':{
//     'required':'Email is required',
//     'emailDomain':'Email Domain should be codemindtechnogy.com'
//   }
//   }

//   constructor(private fb:FormBuilder) { }

//   ngOnInit() {
//     this.getDate();
//    this.employeeForm=this.fb.group({
//     email:['', [Validators.required,emailDomain]]

//      this.employeeForm.valueChanges.subscribe(Date)=({
//       this.logValidationErrors(this.employeeForm),
//     })
//    })
//    this.logValidationErrors(group : FormGroup = this.employeeForm):void{
//       Object.keys(group.controls).foreach(key:string)=>{
//         const AbstractControl = group.get(key);
       
//         if(AbstractControl instanceof FormGroup){
//           this.logValidationErrors(AbstractControl);
//         }
//         else{
//           this.formError[Key];
//           if(AbstractControl && !AbstractControl.valid && (AbstractControl.touched || AbstractControl.dirty)){
//             const massages= this.validationMassages[key];
//             for(const errorkey in AbstractControl.errors){
//               this.formError[key]+= massages[errorkey];
//             }
//           }
//         }
//       }
//    }
//   logValidationErrors(AbstractControl: FormGroup) {
//     throw new Error('Method not implemented.');
//   }

//   }


//   // NaEmails(control:FormControl): promise<any> | observable<any>{
//   //   const myResponse = new promise<any>((resolve,reject)=>{
//   //     setTimeout(() => {
        
//   //       if(control.value === 'priyapatel@gmail.com'){
//   //         resolve({'emailNotAllowed:email must be only ssgahgs@codemind.com':true})
//   //       }else{
//   //         resolve(null)
//   //       }
//   //     }, 3000);
//   //   })
//   //   return myResponse;
//   // }

// }
// function emailDomain(control:AbstractControl): {[key:string]:any} | null{
//  const email:string=control.value;
//  const domain = email.substring(email.lastIndexOf('@')+1);
//  if(email=== '' || domain.toLocaleLowerCase()==='codemindtechnology.com'){
//   return null;
  

//  }
//  else{
//     return {'emailDomain':true};
// }
}

