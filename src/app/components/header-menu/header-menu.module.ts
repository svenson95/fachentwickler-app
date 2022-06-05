import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { HeaderMenuComponent } from './header-menu.component';

@NgModule({
  declarations: [HeaderMenuComponent],
  exports: [HeaderMenuComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
})
export class HeaderMenuModule {}
