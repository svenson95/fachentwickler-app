import { NgModule } from '@angular/core';
import { AlreadyReadPipe } from './already-read/already-read.pipe';
import { DaysLeftPipe } from './days-left/days-left.pipe';
import { LongSubjectNamePipe } from './long-subject-name/long-subject-name.pipe';
import { PageButtonsPipe } from './page-buttons/page-buttons.pipe';
import { SchoolDaysPipe } from './school-days/school-days.pipe';
import { WeekdayStringPipe } from './weekday-string/weekday-string.pipe';

const pipes = [LongSubjectNamePipe, WeekdayStringPipe, AlreadyReadPipe, SchoolDaysPipe, DaysLeftPipe, PageButtonsPipe];

@NgModule({
  declarations: [pipes],
  exports: [pipes],
})
export class PipesModule {}
