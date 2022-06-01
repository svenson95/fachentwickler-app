import { NgModule } from '@angular/core';
import { AlreadyReadPipe } from './already-read/already-read.pipe';
import { DaysLeftPipe } from './days-left/days-left.pipe';
import { LongSubjectNamePipe } from './long-subject-name/long-subject-name.pipe';
import { SchoolDaysPipe } from './school-days/school-days.pipe';
import { SubjectIconPipe } from './subject-icon/subject-icon.pipe';
import { WeekdayStringPipe } from './weekday-string/weekday-string.pipe';

@NgModule({
  declarations: [
    LongSubjectNamePipe,
    WeekdayStringPipe,
    AlreadyReadPipe,
    SchoolDaysPipe,
    DaysLeftPipe,
    SubjectIconPipe,
  ],
  exports: [
    LongSubjectNamePipe,
    WeekdayStringPipe,
    AlreadyReadPipe,
    SchoolDaysPipe,
    DaysLeftPipe,
    SubjectIconPipe,
  ],
  imports: [],
})
export class PipesModule {}
