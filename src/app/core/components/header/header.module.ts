import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { AppIconModule } from '../../components/app-icon/app-icon.module';
import { SearchFieldModule } from '../search-field/search-field.module';
import { HamburgerIconModule } from './hamburger-icon/hamburger-icon.module';
import { HeaderMenuModule } from './header-menu/header-menu.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    AppIconModule,
    HamburgerIconModule,
    HeaderMenuModule,
    SearchFieldModule,
  ],
})
export class HeaderModule {}
