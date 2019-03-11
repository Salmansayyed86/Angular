import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule }from '@angular/forms'

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AddressComponent } from './address/address.component';
import { ViewModule } from './view/view.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
