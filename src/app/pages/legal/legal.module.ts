import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LegalComponent } from './legal.component';
import { LegalPageRoutingModule } from './legal-routing.module';



@NgModule({
  declarations: [LegalComponent],
  imports: [
    CommonModule,
    LegalPageRoutingModule,
    AngularMaterialModule,
  ]
})
export class LegalModule { }
