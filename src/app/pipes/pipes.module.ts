import { NgModule } from '@angular/core';

import { LongSubjectNamePipe } from './long-subject-name/long-subject-name.pipe';
import { WeekdayStringPipe } from './weekday-string/weekday-string.pipe';
import { AlreadyReadPipe } from './already-read/already-read.pipe';
import { SchoolDaysPipe } from './school-days/school-days.pipe';
import { DaysLeftPipe } from './days-left/days-left.pipe';


@NgModule({
  declarations: [LongSubjectNamePipe, WeekdayStringPipe, AlreadyReadPipe, SchoolDaysPipe, DaysLeftPipe],
  exports: [LongSubjectNamePipe, WeekdayStringPipe, AlreadyReadPipe, SchoolDaysPipe, DaysLeftPipe],
  imports: []
})
export class PipesModule { }
