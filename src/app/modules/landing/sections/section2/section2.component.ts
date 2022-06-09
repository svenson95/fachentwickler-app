import { Component } from '@angular/core';
import { testDashboard, testSchedule, testSchoolWeek, testUser } from '../../../../core/constants/landing-page-data';
import { DashboardData } from '../../../../core/models/dashboard-data';
import { Schedule } from '../../../../core/models/schedule';
import { SchoolWeek } from '../../../../core/models/school-week';
import { User } from '../../../../core/models/user';

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
