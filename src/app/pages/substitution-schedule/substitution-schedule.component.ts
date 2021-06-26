import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../services/header.service';
import { schedule } from '../../../data/schedule';

@Component({
  selector: 'fe-substitution-schedule',
  templateUrl: './substitution-schedule.component.html'
})
export class SubstitutionScheduleComponent implements OnInit {

  schedule = schedule;

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Vertretungs<wbr/>plan');
  }

  ngOnInit(): void {
  }

}
