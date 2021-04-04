import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { Matching } from '../../models/matching-piece';
import { subjects } from '../../../data/menu-items';

@Component({
  selector: 'app-quiz',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {

  matching: Matching;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private router: Router
  ) {
    this.headerService.setPageTitle(
      subjects.find(sub => sub.url === router.url.substring(
        0, router.url.indexOf('/', 1)
      ))?.title
    );
    this.dataService.getMatching(router.url.substring(
        router.url.indexOf('/', 1), router.url.length
    )).subscribe(
      (data) => {
        this.matching = data;
      },
      (error) => {
        console.log('Error while GET quiz', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
