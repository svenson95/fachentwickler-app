import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';
import { DashboardData } from '../../models/dashboard-data';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-progress-card',
  templateUrl: './user-progress-card.component.html',
  styleUrls: ['./user-progress-card.component.scss']
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
