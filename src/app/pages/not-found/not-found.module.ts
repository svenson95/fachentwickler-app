import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { NotFoundPage } from './not-found.page';
import { NotFoundPageRoutingModule } from './not-found-routing.module';



@NgModule({
  declarations: [NotFoundPage],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NotFoundPageRoutingModule
  ]
})
export class NotFoundPageModule { }
