import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { MatchingsCardComponent } from './matchings-card.component';

@NgModule({
  declarations: [MatchingsCardComponent],
  exports: [MatchingsCardComponent],
  imports: [SharedModule],
})
export class MatchingsCardModule {}
