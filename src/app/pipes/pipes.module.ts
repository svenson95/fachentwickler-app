import { NgModule } from '@angular/core';

import { LongSubjectNamePipe } from './long-subject-name/long-subject-name.pipe';
import { WeekdayStringPipe } from './weekday-string/weekday-string.pipe';
import { AlreadyReadPipe } from './already-read/already-read.pipe';
import { SchoolDaysPipe } from './school-days/school-days.pipe';


@NgModule({
  declarations: [LongSubjectNamePipe, WeekdayStringPipe, AlreadyReadPipe, SchoolDaysPipe],
  exports: [LongSubjectNamePipe, WeekdayStringPipe, AlreadyReadPipe, SchoolDaysPipe],
  imports: []
})
export class PipesModule { }
