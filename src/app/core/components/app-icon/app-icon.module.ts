import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AppIconComponent } from './app-icon.component';

@NgModule({
  declarations: [AppIconComponent],
  exports: [AppIconComponent],
  imports: [SharedModule],
})
export class AppIconModule {}
