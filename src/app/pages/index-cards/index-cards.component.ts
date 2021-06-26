import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';
import { IndexCards } from '../../models/index-cards';

@Component({
  selector: 'fe-index-cards',
  templateUrl: './index-cards.component.html'
})
export class IndexCardsComponent implements OnInit {

  indexCards: IndexCards;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private router: Router
  ) {
    this.headerService.setPageTitle(
      subjects.find(sub => sub.url === router.url.substring(
        0, router.url.indexOf('/', 1)
      ))?.title
    );
    this.dataService.getIndexCards(router.url.substr(router.url.indexOf('/', 1) + 1)).subscribe(
      (data) => {
        this.indexCards = data;
      },
      (error) => {
        console.log('Error while GET index-cards', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
