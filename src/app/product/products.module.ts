import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TVComponent } from './tv/tv.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { TabletComponent } from './tablet/tablet.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';

  const prodRoutes:Routes=[
    { path:'',component:ProductComponent, children:[
  // {path:'',component:ProductComponent},
  {path:'laptop', component:LaptopComponent},
  {path:'tablet', component:TabletComponent},
  {path:'tv', component:TVComponent},
  {path:'washingmachine',component:WashingMachineComponent}
  
]}]


@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TVComponent,
    WashingMachineComponent,
    TabletComponent,
   
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports:
  [ RouterModule,
    
  ]
})
export class ProductsModule { 
  constructor()
  {
    'product loaded'
  }
}
