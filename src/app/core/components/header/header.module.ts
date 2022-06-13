import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AppIconModule } from '../app-icon/app-icon.module';
import { SearchFieldModule } from '../search-field/search-field.module';
import { HamburgerIconModule } from './hamburger-icon/hamburger-icon.module';
import { HeaderMenuModule } from './header-menu/header-menu.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [SharedModule, AppIconModule, HamburgerIconModule, HeaderMenuModule, SearchFieldModule],
})
export class HeaderModule {}
