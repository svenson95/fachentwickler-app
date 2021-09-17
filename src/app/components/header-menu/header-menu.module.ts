import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { HeaderMenuComponent } from './header-menu.component';



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
