import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { subjects } from '../../../data/menu-items';
import { testArticle } from '../../../data/posts/post-template';

@Component({
  selector: 'fe-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private dataService: DataService,
              private router: Router,
              private headerService: HeaderService,
              public authService: AuthService
  ) {
    this.headerService.setPageTitle(
      subjects.find(sub => sub.url === this.router.url.substring(0, this.router.url.indexOf('/', 2))
    )?.title);

    const postUrl = router.url.substr(router.url.indexOf('/', 2) + 1, router.url.length);

    if (postUrl === 'topic/testarticle') {
      this.post = testArticle;
      return;
    }

    this.dataService.getPost(postUrl).subscribe(
      (data) => this.post = data,
      (error) => console.log('Error while GET post', error)
    );
  }

  ngOnInit(): void {
  }

}
