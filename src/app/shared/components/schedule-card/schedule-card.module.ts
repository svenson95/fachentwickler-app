import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../../core/components/card/card.module';
import { ScheduleCardComponent } from './schedule-card.component';
import { ScheduleModule } from './schedule/schedule.module';

@NgModule({
  declarations: [ScheduleCardComponent],
  exports: [ScheduleCardComponent],
  imports: [CommonModule, CardModule, ScheduleModule],
  providers: [DatePipe],
})
export class ScheduleCardModule {}
