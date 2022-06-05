import { Pipe, PipeTransform } from '@angular/core';
import { SchoolWeek, WeekDays } from '../../../core/models/school-week';

@Pipe({
  name: 'schoolDays',
})
export class SchoolDaysPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  public transform(schoolWeek: SchoolWeek): WeekDays[] {
    const days: WeekDays[] = [];

    schoolWeek.posts.forEach((post) => {
      const postDay = new Date(post.lessonDate).getDay();
      const day = days.find((week) => week.day === postDay);

      if (day) {
        day.lessons.push(post);
      } else if (postDay) {
        days.push({ day: postDay, lessons: [post] });
      }
    });

    return days;
  }
}
