import { Component } from '@angular/core';
import { indexCards } from '../../../data/index-cards';
import { matchings } from '../../../data/matchings';
import { quizzes } from '../../../data/quizzes';
import { testDashboard, testSchedule, testSchoolWeek, testUser } from '../../core/constants/landing-page-data';
import { DashboardData } from '../../core/models/dashboard-data';
import { PostIndexCards, PostMatchings, PostQuiz } from '../../core/models/post';
import { Schedule } from '../../core/models/schedule';
import { SchoolWeek } from '../../core/models/school-week';
import { User } from '../../core/models/user';
import { HeaderService } from '../../core/services/header.service';

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

  public testMatching: PostMatchings = matchings[0];

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Start');
  }
}
