import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppIconComponent } from './app-icon.component';

@NgModule({
  declarations: [AppIconComponent],
  exports: [AppIconComponent],
  imports: [CommonModule],
})
export class AppIconModule {}
