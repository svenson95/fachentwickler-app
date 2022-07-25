import { NgModule } from '@angular/core';

import { AppIconModule } from '@core-components/app-icon/app-icon.module';

import { SharedModule } from '../../../shared/shared.module';
import { FooterModule } from '../footer/footer.module';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [SharedModule, FooterModule, AppIconModule],
})
export class MainModule {}
