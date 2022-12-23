import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { demoComponent, demoComponents } from './demo/demo.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { DrectiveAssignmentComponent } from './drective-assignment/drective-assignment.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { ComponetDirectivesComponent } from './componet-directives/componet-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HooksComponent } from './hookss/hookss/hooks.component';
import { DirAssignComponent } from './dir-assign/dir-assign.component';
import { SimpletempleteFormComponent } from './simpletemplete-form/simpletemplete-form.component';
import { SimpleformComponent } from 'simpleform/simpleform.component';
import { SimpleformAssingnmentComponent } from './simpleform-assingnment/simpleform-assingnment.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TempletdrivenFormAssComponent } from './templetdriven-form-ass/templetdriven-form-ass.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

import { CountPipe } from './services/count.pipe';
import { PipedemoPipe } from './pipedemo.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { PipefilterPipe } from './pipes/pipefilter.pipe';
import { PipefilterComponent } from './pipefilter/pipefilter.component';
import { FilpterpipeComponent } from './pipes/Pipes/filpterpipe/filpterpipe.component';
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
    HooksComponent,
    DirAssignComponent,
    SimpletempleteFormComponent,
    SimpleformComponent,
    SimpleformAssingnmentComponent,
    ReactiveFormsComponent,
    TempletdrivenFormAssComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CountPipe,
    PipedemoPipe,
    PipeComponent,
    PipefilterPipe,
    PipefilterComponent,
    FilpterpipeComponent,

  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
