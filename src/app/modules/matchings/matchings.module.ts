import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatchingsCardModule } from './matchings-card/matchings-card.module';
import { MatchingsRoutingModule } from './matchings-routing.module';
import { MatchingsPage } from './matchings.page';

@NgModule({
  declarations: [MatchingsPage],
  exports: [MatchingsPage],
  imports: [SharedModule, MatchingsRoutingModule, MatchingsCardModule],
})
export class MatchingsPageModule {}
