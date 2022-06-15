import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

import { NextExamsCardComponent } from './next-exams-card.component';

@NgModule({
  declarations: [NextExamsCardComponent],
  exports: [NextExamsCardComponent],
  imports: [SharedModule],
})
export class NextExamsCardModule {}
