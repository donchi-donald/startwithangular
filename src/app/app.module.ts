import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms'; /*two-way-binding*/


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /*two-way-binding*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
