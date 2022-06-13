import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HamburgerIconComponent } from './hamburger-icon.component';

@NgModule({
  declarations: [HamburgerIconComponent],
  exports: [HamburgerIconComponent],
  imports: [CommonModule],
})
export class HamburgerIconModule {}
