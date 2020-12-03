import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutPageRoutingModule } from './about-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    AngularMaterialModule
  ]
})
export class AboutModule { }
