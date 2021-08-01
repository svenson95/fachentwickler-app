import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { Post } from '../../models/post';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { subjects } from '../../../data/menu-items';
import { testArticle } from '../../../data/posts/post-template';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fe-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {

  post: Post;
  subscription: Subscription = new Subscription();

  constructor(private dataService: DataService,
              private router: Router,
              private headerService: HeaderService,
              public authService: AuthService
  ) {
    this.headerService.setPageTitle(
      subjects.find(sub => sub.url === this.router.url.substring(0, this.router.url.indexOf('/', 2))
    )?.title);
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
      (data) => this.post = data,
      (error) => console.log('Error while GET post', error)
    );
  }

}
