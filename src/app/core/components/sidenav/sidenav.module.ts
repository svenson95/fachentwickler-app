import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { NavLinkModule } from './nav-link/nav-link.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [CommonModule, AngularMaterialModule, NavLinkModule],
})
export class SidenavModule {}
