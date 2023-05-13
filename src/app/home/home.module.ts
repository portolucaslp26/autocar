import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ],
  declarations: [HomeComponent],

})
export class HomeModule { }
