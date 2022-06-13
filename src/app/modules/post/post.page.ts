import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { testArticle } from '@data/posts/post-template';
import { subjects } from '@constants/menu-items';
import { PostArticle } from '@models/post';
import { AuthService } from '@services/auth.service';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';

@Component({
  selector: 'fe-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit, OnDestroy {
  public post: PostArticle;

  private subscription: Subscription = new Subscription();

  constructor(
    private dataService: DataService,
    private router: Router,
    private headerService: HeaderService,
    public authService: AuthService,
    public loadingService: LoadingService,
  ) {
    const subjectUrl = this.router.url.substring(0, this.router.url.indexOf('/', 2));
    this.headerService.setPageTitle(subjects.find((sub) => sub.url === subjectUrl)?.title);
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => this.loadData()),
    );
    this.loadData();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadData(): void {
    const postUrl = this.router.url.substr(this.router.url.indexOf('/', 2) + 1, this.router.url.length);

    if (postUrl === 'topic/testarticle') {
      this.post = testArticle;
    } else {
      this.dataService.getPost(postUrl).subscribe((data) => {
        if (data === null) {
          this.router.navigate(['not-found']);
        } else {
          this.post = data as PostArticle;
        }
      });
    }
  }
}
