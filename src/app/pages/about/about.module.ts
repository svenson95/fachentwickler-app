import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './about.page';
import { AboutPageRoutingModule } from './about-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    AngularMaterialModule
  ]
})
export class AboutPageModule { }
