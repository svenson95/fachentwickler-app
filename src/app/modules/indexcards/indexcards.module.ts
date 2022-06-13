import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IndexCardModule } from './index-card/index-card.module';
import { IndexcardsRoutingModule } from './indexcards-routing.module';
import { IndexcardsPage } from './indexcards.page';

@NgModule({
  declarations: [IndexcardsPage],
  imports: [SharedModule, IndexcardsRoutingModule, IndexCardModule],
})
export class IndexcardsPageModule {}
