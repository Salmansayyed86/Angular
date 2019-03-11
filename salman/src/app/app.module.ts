import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // <-Add here

import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import {UserComponent}  from 'src/app/user/user.component';
import {DetailsComponent} from 'src/app/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
