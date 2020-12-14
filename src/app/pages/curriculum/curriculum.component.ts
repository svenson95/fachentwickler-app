import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { SchoolWeek } from '../../models/school-week';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  allWeeks: number[];
  schoolWeeks: SchoolWeek[];

  constructor(private headerService: HeaderService,
              private dataService: DataService) {
    this.allWeeks = Array.from(Array(this.dataService.schoolWeekValue + 1).keys());
    this.allWeeks.shift();      // remove school-week 0
    this.headerService.setPageTitle('Lehrplan');

    this.dataService.getAllWeeks().subscribe(response => {
      this.schoolWeeks = response;
    });
  }

  ngOnInit(): void {
  }

}
