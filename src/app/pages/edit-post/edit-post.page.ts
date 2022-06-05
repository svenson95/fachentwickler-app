import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { subjects } from '../../constants/menu-items';
import { Post } from '../../models/post';
import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-post-page',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage {
  public post: Post;

  constructor(
    private dataService: DataService,
    private router: Router,
    private headerService: HeaderService,
    public authService: AuthService,
  ) {
    this.headerService.setPageTitle(
      subjects.find(
        (sub) =>
          sub.url === router.url.substring(0, router.url.indexOf('/', 2)),
      )?.title,
    );

    const postUrl = this.router.url.substring(
      router.url.indexOf('/', 2) + 1,
      router.url.lastIndexOf('/'),
    );

    this.dataService.getPost(postUrl).subscribe((data) => {
      this.post = data;
    });
  }
}
