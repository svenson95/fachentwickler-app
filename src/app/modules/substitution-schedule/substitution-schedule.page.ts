import { Component } from '@angular/core';

import { schedule } from '../../core/constants/schedule';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'fe-substitution-schedule-page',
  templateUrl: './substitution-schedule.page.html',
})
export class SubstitutionSchedulePage {
  public schedule = schedule;

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Vertretungs<wbr/>plan');
  }
}
