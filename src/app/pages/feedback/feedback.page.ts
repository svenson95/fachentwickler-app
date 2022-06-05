import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-feedback-page',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {
  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Feedback');
  }
}
