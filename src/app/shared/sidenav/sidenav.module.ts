import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavLinkModule } from '../../components/nav-link/nav-link.module';
import { AngularMaterialModule } from '../angular-material.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [CommonModule, AngularMaterialModule, NavLinkModule],
})
export class SidenavModule {}
