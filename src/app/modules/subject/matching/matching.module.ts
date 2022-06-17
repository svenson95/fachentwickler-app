import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { MatchingCardModule } from './matching-card/matching-card.module';
import { MatchingRoutingModule } from './matching-routing.module';
import { MatchingPage } from './matching.page';

@NgModule({
  declarations: [MatchingPage],
  exports: [MatchingPage],
  imports: [SharedModule, MatchingRoutingModule, MatchingCardModule],
})
export class MatchingPageModule {}
