import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './counter/counter.service';


import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [CounterComponent]
})
export class AppModule {
  /**
   *
   */
  constructor(private injector: Injector) { }


  ngDoBootstrap() {
    const counterElement = createCustomElement(CounterComponent, { injector: this.injector });
    customElements.define('my-counter', counterElement as any);
  }
}
