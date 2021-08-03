import { NgModule } from '@angular/core';
import { LongSubjectNamePipe } from './long-subject-name/long-subject-name.pipe';
import { WeekdayStringPipe } from './weekday-string/weekday-string.pipe';
import { AlreadyReadPipe } from './already-read/already-read.pipe';



@NgModule({
  declarations: [LongSubjectNamePipe, WeekdayStringPipe, AlreadyReadPipe],
  exports: [LongSubjectNamePipe, WeekdayStringPipe, AlreadyReadPipe],
  imports: []
})
export class PipesModule { }
