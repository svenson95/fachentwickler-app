import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AppIconModule } from '../app-icon/app-icon.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [SharedModule, AppIconModule],
})
export class FooterModule {}
