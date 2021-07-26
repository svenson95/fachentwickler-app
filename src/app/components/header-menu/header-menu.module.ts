import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { HeaderMenuComponent } from './header-menu.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderMenuComponent],
  exports: [HeaderMenuComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class HeaderMenuModule { }
