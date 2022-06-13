import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { NavLinkModule } from './nav-link/nav-link.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [SharedModule, NavLinkModule],
})
export class SidenavModule {}
