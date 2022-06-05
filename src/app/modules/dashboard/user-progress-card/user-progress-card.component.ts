import { Component, Input } from '@angular/core';
import { DashboardData } from '../../../core/models/dashboard-data';
import { User } from '../../../core/models/user';
import { DataService } from '../../../core/services/data.service';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'fe-user-progress-card',
  templateUrl: './user-progress-card.component.html',
  styleUrls: ['./user-progress-card.component.scss'],
})
export class UserProgressCardComponent {
  @Input() public user: User;

  @Input() public dashboard: DashboardData;

  constructor(public dataService: DataService, public loadingService: LoadingService) {}
}
