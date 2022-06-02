import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../card/card.module';
import { ScheduleModule } from '../../schedule/schedule.module';
import { ScheduleCardComponent } from './schedule-card.component';

@NgModule({
  declarations: [ScheduleCardComponent],
  exports: [ScheduleCardComponent],
  imports: [CommonModule, CardModule, ScheduleModule],
  providers: [DatePipe],
})
export class ScheduleCardModule {}
