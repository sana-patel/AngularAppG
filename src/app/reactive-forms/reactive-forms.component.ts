import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
notAllowedNames=['codemind','technology']
  gender=[
    {
      id:'1',
      value:'male'
    },
    {
      id:'1',
      value:'female'
    }

  ]
myReactiveForm : FormGroup;
  constructor(private_fb:FormGroup) {
    this.createForm();
    console.log(this.createForm());
    
   }

  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     }
    //   })
    // }, 3500);
 

    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'username': 'Codemind1122',
          'email': 'test@gmail.com'
        }
      })
    }, 3500);



  }

  createForm(){
    // this.myReactiveForm=new FormGroup({
    //    'userDetails': new FormControl({
    //     'username':new FormControl('', [Validators.required,this.naNames.bind(this)]),
    //   'email':new FormControl('',[Validators.required,Validators.email],this.NaEmails),
    //    }),
    //   'course': new FormControl(''),
    //   'gender': new FormControl(''),
    
    // });
    // this.myReactiveForm = this. _fb.group({
    //   userDetails: this. _fb.group({
    //     username: ['', Validators.required],
    //     email: ['', Validators.required]
    //   }),
    //   course: ['Angular'],
    //   gender: ['Male'],
    //   skills: this. _fb.array([])
    // })

    
  }
  onSubmit(){
    console.log(this.myReactiveForm);
    this.submitted=true;
    
  }
  naNames(control:FormControl){

  }

  submitted;
  // 
  NaEmails(control:FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }

}
