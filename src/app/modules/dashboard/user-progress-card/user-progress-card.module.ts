import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UserProgressCardComponent } from './user-progress-card.component';

@NgModule({
  declarations: [UserProgressCardComponent],
  exports: [UserProgressCardComponent],
  imports: [SharedModule],
})
export class UserProgressCardModule {}
