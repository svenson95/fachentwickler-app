import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '../../core/constants/menu-items';
import { PostArticle } from '../../core/models/post';
import { AuthService } from '../../core/services/auth.service';
import { DataService } from '../../core/services/data.service';
import { HeaderService } from '../../core/services/header.service';

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
    public authService: AuthService,
  ) {
    this.headerService.setPageTitle(
      subjects.find((sub) => sub.url === router.url.substring(0, router.url.indexOf('/', 2)))?.title,
    );

    const postUrl = this.router.url.substring(router.url.indexOf('/', 2) + 1, router.url.lastIndexOf('/'));

    this.dataService.getPost(postUrl).subscribe((data) => {
      this.post = data as PostArticle;
    });
  }
}
