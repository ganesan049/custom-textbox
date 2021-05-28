import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MultiTextboxComponent } from './multi-textbox/multi-textbox.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    MultiTextboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MultiTextboxComponent]
})
export class AppModule {
  constructor(private injector:Injector){
    const customText = createCustomElement(MultiTextboxComponent,{injector:this.injector});
    customElements.define('multi-textbox',customText);
  }
  ngDoBootstrap(){
  }
 }
