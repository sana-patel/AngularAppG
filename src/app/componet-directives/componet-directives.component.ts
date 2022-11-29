import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-componet-directives',
  templateUrl: './componet-directives.component.html',
  styleUrls: ['./componet-directives.component.css']
})
export class ComponetDirectivesComponent implements OnInit {

  onSubmit(data){
    console.log(data);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
