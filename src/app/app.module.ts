import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { demoComponent, demoComponents } from './demo/demo.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    demoComponent,
    demoComponents,
    ServersComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
