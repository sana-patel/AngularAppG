import { NgModule } from '@angular/core';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes=[
  {path: '', component : OrderlistComponent}
];

@NgModule({ 

  imports: 
   [RouterModule.forChild(routes)],
   exports: [RouterModule],
  
 
  
})
export class OrdesRotingModule { }
