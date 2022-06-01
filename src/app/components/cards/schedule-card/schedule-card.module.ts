import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { PostLinkModule } from '../../post-link/post-link.module';
import { ScheduleModule } from '../../schedule/schedule.module';
import { ScheduleCardComponent } from './schedule-card.component';

@NgModule({
  declarations: [ScheduleCardComponent],
  exports: [ScheduleCardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PostLinkModule,
    ScheduleModule,
  ],
})
export class ScheduleCardModule {}
