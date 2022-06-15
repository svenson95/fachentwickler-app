import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { HamburgerIconComponent } from './hamburger-icon.component';

@NgModule({
  declarations: [HamburgerIconComponent],
  exports: [HamburgerIconComponent],
  imports: [SharedModule],
})
export class HamburgerIconModule {}
