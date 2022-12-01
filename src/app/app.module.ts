import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { demoComponent, demoComponents } from './demo/demo.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule }   from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { DrectiveAssignmentComponent } from './drective-assignment/drective-assignment.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { ComponetDirectivesComponent } from './componet-directives/componet-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    demoComponent,
    demoComponents,
    ServersComponent,
    DataBindingComponent,
    DemodirectivesComponent,
    DrectiveAssignmentComponent,
    AttriComponent,
    CustdirDirective,
    ComponetDirectivesComponent,
    ParentComponent,
    ChildComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
