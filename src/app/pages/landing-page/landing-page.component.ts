import { Component } from '@angular/core';

import { Quiz } from '../../models/quiz';
import { IndexCards } from '../../models/index-cards';
import { Matching } from '../../models/matching-piece';
import { User } from '../../models/user';
import { DashboardData } from '../../models/dashboard-data';
import { SchoolWeek } from '../../models/school-week';

import { HeaderService } from '../../services/header.service';

import { quizzes } from '../../../data/quizzes';
import { indexCards } from '../../../data/index-cards';
import { matchings } from '../../../data/matchings';
import { testDashboard, testSchoolWeek, testUser } from '../../../data/dashboard-test-data';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {

  testUser: User = testUser;
  testDashboard: DashboardData = testDashboard;
  testSchoolWeek: SchoolWeek = testSchoolWeek;
  testQuiz: Quiz = quizzes[2];
  testIndexCards: IndexCards = indexCards[1];
  testMatching: Matching = matchings[0];

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Start');
  }

}
