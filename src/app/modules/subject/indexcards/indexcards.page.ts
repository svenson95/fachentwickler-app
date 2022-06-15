import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '@constants/menu-items';
import { PostIndexCards } from '@models/post';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-indexcards-page',
  templateUrl: './indexcards.page.html',
  styleUrls: ['./indexcards.page.scss'],
})
export class IndexcardsPage {
  public indexCards: PostIndexCards;

  constructor(
    private router: Router,
    public user: UserService,
    private header: HeaderService,
    private data: DataService,
    public loading: LoadingService,
  ) {
    const { url } = this.router;
    const subjectUrl = url.substring(0, url.indexOf('/', 1));
    this.header.setPageTitle(subjects.find((sub) => sub.url === subjectUrl)?.title);

    const indexcardsUrl = url.substr(url.indexOf('/', 1) + 1);
    this.data.getPost(indexcardsUrl).subscribe((response) => {
      if (response !== null) {
        this.indexCards = response as PostIndexCards;
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }
}
