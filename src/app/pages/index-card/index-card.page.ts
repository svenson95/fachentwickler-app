import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostIndexCards } from '../../models/post';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';
import { subjects } from '../../constants/menu-items';

@Component({
  selector: 'fe-index-card-page',
  templateUrl: './index-card.page.html'
})
export class IndexCardPage implements OnInit {

  indexCards: PostIndexCards;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              public loadingService: LoadingService,
              private router: Router
  ) {
    const subject = router.url.substring(0, router.url.indexOf('/', 1));
    this.headerService.setPageTitle(subjects.find(sub => sub.url === subject)?.title);
    this.dataService.getPost(router.url.substr(router.url.indexOf('/', 1) + 1)).subscribe(
      (data) => this.indexCards = data as PostIndexCards,
      (error) => console.log('Error while GET index-cards', error)
    );
  }

  ngOnInit(): void {
  }

}
