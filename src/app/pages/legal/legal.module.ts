import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LegalPage } from './legal.page';
import { LegalPageRoutingModule } from './legal-routing.module';



@NgModule({
  declarations: [LegalPage],
  imports: [
    CommonModule,
    LegalPageRoutingModule,
    AngularMaterialModule,
  ]
})
export class LegalPageModule { }
