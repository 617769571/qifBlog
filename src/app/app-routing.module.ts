import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router'
export const appRoutes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
