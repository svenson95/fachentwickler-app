import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { ScheduleCardComponent } from './schedule-card.component';
import { PostLinkModule } from '../../post-link/post-link.module';
import { ScheduleModule } from '../../schedule/schedule.module';



@NgModule({
  declarations: [ScheduleCardComponent],
  exports: [ScheduleCardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PostLinkModule,
    ScheduleModule
  ]
})
export class ScheduleCardModule { }
