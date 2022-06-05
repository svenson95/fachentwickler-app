import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderMenuModule } from '../../components/header-menu/header-menu.module';
import { SearchFieldModule } from '../../components/search-field/search-field.module';
import { AngularMaterialModule } from '../angular-material.module';
import { AppIconModule } from '../app-icon/app-icon.module';
import { HamburgerIconModule } from '../hamburger-icon/hamburger-icon.module';
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
