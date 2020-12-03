import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-substitution-schedule',
  templateUrl: './substitution-schedule.component.html',
  styleUrls: ['./substitution-schedule.component.scss']
})
export class SubstitutionScheduleComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Vertretungsplan');
  }

  ngOnInit(): void {
  }

}
