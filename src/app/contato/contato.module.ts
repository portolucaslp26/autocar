import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule,
    AngularMaterialModule
  ],
  declarations: [ContatoComponent],

})
export class ContatoModule { }
