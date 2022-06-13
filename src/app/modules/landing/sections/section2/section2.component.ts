import { Component } from '@angular/core';

import { testDashboard, testSchedule, testSchoolWeek, testUser } from '@constants/landing-page-data';
import { DashboardData } from '@models/dashboard-data';
import { Schedule } from '@models/schedule';
import { SchoolWeek } from '@models/school-week';
import { User } from '@models/user';

@Component({
  selector: 'section.2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component {
  public testUser: User = testUser;

  public testDashboard: DashboardData = testDashboard;

  public testSchedule: Schedule = testSchedule;

  public testSchoolWeek: SchoolWeek = testSchoolWeek;
}
