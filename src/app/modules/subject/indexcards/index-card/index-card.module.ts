import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

import { IndexCardComponent } from './index-card.component';

@NgModule({
  declarations: [IndexCardComponent],
  exports: [IndexCardComponent],
  imports: [SharedModule],
})
export class IndexCardModule {}
