import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcarComponent } from './addcar/addcar.component';
import { ViewcarComponent } from './viewcar/viewcar.component';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';


const appRoutes:Routes=[
  {
    path:"",component:AddcarComponent
  },
  {
    path:"view",component:ViewcarComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddcarComponent,
    ViewcarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
