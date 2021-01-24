import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-user-progress-card',
  templateUrl: './user-progress-card.component.html',
  styleUrls: ['./user-progress-card.component.scss']
})
export class UserProgressCardComponent implements OnInit {

  @Input() user;
  @Input() dashboard;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
  }

}
