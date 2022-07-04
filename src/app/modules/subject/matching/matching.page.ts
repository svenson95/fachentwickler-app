import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '@constants/menu-items';
import { PostMatching } from '@models/post';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-matching-page',
  templateUrl: './matching.page.html',
  styleUrls: ['./matching.page.scss'],
})
export class MatchingPage {
  public matching: PostMatching;

  constructor(
    private router: Router,
    private header: HeaderService,
    private data: DataService,
    public user: UserService,
    public loading: LoadingService,
  ) {
    const { url } = this.router;
    const subjectUrl = url.substring(0, url.indexOf('/', 1));
    this.header.setPageTitle(subjects.find((sub) => sub.url === subjectUrl)?.title);

    const matchingUrl = url.substring(url.indexOf('/', 1) + 1);
    this.data.getPost(matchingUrl).subscribe((response) => {
      if (response !== null) {
        this.matching = response as PostMatching;
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }
}
