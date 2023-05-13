import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { SobreComponent } from './sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SobreRoutingModule,
    AngularMaterialModule
  ],
  declarations: [SobreComponent],

})
export class SobreModule { }
