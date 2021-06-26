import { Component, Input, OnInit } from '@angular/core';

import { DashboardData } from '../../models/dashboard-data';
import { User } from '../../models/user';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-user-progress-card',
  templateUrl: './user-progress-card.component.html'
})
export class UserProgressCardComponent implements OnInit {

  @Input() user: User;
  @Input() dashboard: DashboardData;

  constructor(public dataService: DataService,
              public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
  }

}
