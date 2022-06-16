import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { FooterModule } from '../footer/footer.module';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [SharedModule, FooterModule],
})
export class MainModule {}
