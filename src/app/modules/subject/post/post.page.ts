import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { testArticle } from '@data/posts/post-template';
import { subjects } from '@constants/menu-items';
import { PostArticle } from '@models/post';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  public post: PostArticle;

  constructor(
    private router: Router,
    private header: HeaderService,
    private data: DataService,
    public user: UserService,
    public loading: LoadingService,
  ) {
    const { url } = this.router;
    const subjectUrl = url.substring(0, url.indexOf('/', 2));
    this.header.setPageTitle(subjects.find((sub) => sub.url === subjectUrl)?.title);

    const postUrl = url.substr(url.indexOf('/', 2) + 1, url.length);
    if (postUrl === 'topic/testarticle') {
      this.post = testArticle;
    } else {
      this.loadData(postUrl);
    }
  }

  private loadData(url: string): void {
    this.data.getPost(url).subscribe((response) => {
      if (response !== null) {
        this.post = response as PostArticle;
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }
}
