import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Feedback');
  }

  ngOnInit(): void {
  }

}
