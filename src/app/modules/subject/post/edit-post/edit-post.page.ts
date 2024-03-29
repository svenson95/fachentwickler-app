import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '@constants/menu-items';
import { PostArticle } from '@models/post';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';

@Component({
  selector: 'fe-edit-post-page',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage {
  public post: PostArticle;

  constructor(
    private dataService: DataService,
    private router: Router,
    private headerService: HeaderService,
    public loading: LoadingService,
  ) {
    const currentUrl = router.url.substring(0, router.url.indexOf('/', 2));
    this.headerService.setPageTitle(subjects.find((sub) => sub.url === currentUrl)?.title);

    const postUrl = this.router.url.substring(router.url.indexOf('/', 2) + 1, router.url.lastIndexOf('/'));
    this.dataService.getPost(postUrl).subscribe((response) => {
      if (response !== null) {
        this.post = response as PostArticle;
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }
}
