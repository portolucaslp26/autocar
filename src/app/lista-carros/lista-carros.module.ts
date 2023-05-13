import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCarrosComponent } from './lista-carros.component';
import { ListaCarrosRoutingModule } from './lista-carros-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    ListaCarrosRoutingModule,
    AngularMaterialModule,

  ],
  declarations: [ListaCarrosComponent, PaginatorComponent],

})
export class ListaCarrosModule { }
