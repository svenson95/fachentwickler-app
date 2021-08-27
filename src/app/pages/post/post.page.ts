import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Post, PostArticle } from '../../models/post';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { subjects } from '../../constants/menu-items';
import { testArticle } from '../../../data/posts/post-template';

@Component({
  selector: 'fe-post-page',
  templateUrl: './post.page.html'
})
export class PostPage implements OnInit, OnDestroy {

  post: Post;
  subscription: Subscription = new Subscription();

  constructor(private dataService: DataService,
              private router: Router,
              private headerService: HeaderService,
              public authService: AuthService,
              public loadingService: LoadingService
  ) {
    const subjectUrl = this.router.url.substring(0, this.router.url.indexOf('/', 2));
    this.headerService.setPageTitle(subjects.find(sub => sub.url === subjectUrl)?.title);
  }

  ngOnInit(): void {
    this.subscription.add(this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.loadData()));
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadData(): void {
    const postUrl = this.router.url.substr(this.router.url.indexOf('/', 2) + 1, this.router.url.length);

    if (postUrl === 'topic/testarticle') {
      this.post = testArticle;
      return;
    }

    this.dataService.getPost(postUrl).subscribe(
      (data) => this.post = data as PostArticle,
      (error) => console.log('Error while GET post', error)
    );
  }

}
