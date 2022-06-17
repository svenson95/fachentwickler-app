import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

import { MatchingCardComponent } from './matching-card.component';

@NgModule({
  declarations: [MatchingCardComponent],
  exports: [MatchingCardComponent],
  imports: [SharedModule],
})
export class MatchingCardModule {}
