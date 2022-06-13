import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { FooterModule } from '../footer/footer.module';

import { ContentComponent } from './content.component';

@NgModule({
  declarations: [ContentComponent],
  exports: [ContentComponent],
  imports: [SharedModule, FooterModule],
})
export class ContentModule {}
