import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../services/header.service';
import { schedule } from '../../constants/schedule';

@Component({
  selector: 'fe-substitution-schedule-page',
  templateUrl: './substitution-schedule.page.html'
})
export class SubstitutionSchedulePage implements OnInit {

  schedule = schedule;

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Vertretungs<wbr/>plan');
  }

  ngOnInit(): void {
  }

}
