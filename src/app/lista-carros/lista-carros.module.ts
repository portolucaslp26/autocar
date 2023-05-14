import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCarrosComponent } from './lista-carros.component';
import { ListaCarrosRoutingModule } from './lista-carros-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ListaCarrosRoutingModule,
    AngularMaterialModule,
    FormsModule

  ],
  declarations: [ListaCarrosComponent],

})
export class ListaCarrosModule { }
