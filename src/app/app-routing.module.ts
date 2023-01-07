import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplaincesComponent } from './applainces/applainces.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { FashionComponent } from './fashion/fashion.component';
import { GallaryComponent } from './gallary/gallary.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagentfoundComponent } from './pagentfound/pagentfound.component';
import { PostDetailsComponent } from './post-details/post-details.component';


// const routes: Routes = [
//     { path:'',component:HomeComponent},
//     {path:'aboutus',component:AboutusComponent},  //localhost://4200/aboutus
//     {path:'product',component:ProductComponent},//localhost://4200/product
//     {path:'contactus',component:ContactusComponent}//localhost://4200/contactus
// ];
const routes: Routes = [
    { path: '' , redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent }, // localhost://4200
    { path:'aboutus', component: AboutusComponent} ,// localhost://4200/aboutus
    // { path:'product', children:[
    //     {path:'',component:ProductComponent},
    //     {path:'laptop', component:LaptopComponent},
    //     {path:'laptop', component:LaptopComponent},
    //     {path:'laptop', component:LaptopComponent},
        
    // ]},
     // localhost:4200/product
     //---------------------------------------------------
     {path:'grocery', component:GroceryComponent},
     {path:'fashion',component:FashionComponent},
     {path:'applainces',component:ApplaincesComponent},
     //seperate------------------
    { path:'contactus', component: ContactusComponent},
    { path:'gallary',component:GallaryComponent},
    {path:'post',component:DemopostComponent},
    {path:'postdetails/:id',component:PostDetailsComponent},
    {path : 'product',loadChildren:'./product/products.module#ProductsModule'},
    {path:'odrers',loadChildren:'./odrers/ordes-roting.module# OdrersModule'},
    {path:'**',component:PagentfoundComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],//{preloadingStrategy : preloadAllModules})
  exports: [RouterModule]
})
export class AppRoutingModule { }
