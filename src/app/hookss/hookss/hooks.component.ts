import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges{
  @Input() userid: number;
pi;
  constructor() {
    this.pi = 3.14;
    console.log("HooksComponent constructor called");
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  // }

  //  counter;
  //  num:number = 1;
  //  this.counter = setInterval(() => {
  //        this.num = this.num + 1 ;
  //        console.log(this.num);
  //        // api 
  //      }, 1000)
  //  ngOnDestroy(): void {
  //      console.log("ngOnDestroy");
  //      clearInterval(this.counter);







  // ngOnChanges(changes: SimpleChanges): void {

  //   console.log("HooksComponent ngOnChanges called");
  //   for (const propname in changes) {
  //     const prop = changes[propname];

  //     const {previousValue, currentValue, firstChange} = prop;

  //     console.log(`Prop name ${propname}`);
  //     console.log(`Prev  value ${previousValue}`);
  //     console.log(`Current value ${currentValue}`);
  //     console.log(`First change ${firstChange}`);
  //     console.log("---------------")

  //   }
    
  }

  // appchildExist: boolean = true;

  // destroy() {
  //  this.appchildExist = false;
  // }
 
  
  //  // hooks 
  // ngOnInit() {
  //   console.log("HooksComponent ngOnInit called")
  // }


  // }


}
