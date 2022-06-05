import { Component } from '@angular/core';
import { indexCards } from '../../../data/index-cards';
import { matchings } from '../../../data/matchings';
import { quizzes } from '../../../data/quizzes';
import {
  testDashboard,
  testSchedule,
  testSchoolWeek,
  testUser,
} from '../../constants/landing-page-data';
import { DashboardData } from '../../models/dashboard-data';
import { PostIndexCards, PostMatching, PostQuiz } from '../../models/post';
import { Schedule } from '../../models/schedule';
import { SchoolWeek } from '../../models/school-week';
import { User } from '../../models/user';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-landing-page',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  public testUser: User = testUser;

  public testSchedule: Schedule = testSchedule;

  public testDashboard: DashboardData = testDashboard;

  public testSchoolWeek: SchoolWeek = testSchoolWeek;

  public testQuiz: PostQuiz = quizzes[2];

  public testIndexCards: PostIndexCards = indexCards[1];

  public testMatching: PostMatching = matchings[0];

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Start');
  }
}
