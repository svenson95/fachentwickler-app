import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'fe-feedback-page',
  templateUrl: './feedback.page.html'
})
export class FeedbackPage implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Feedback');
  }

  ngOnInit(): void {
  }

}
