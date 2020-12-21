import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
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

    this.dataService.getPost(router.url).subscribe(
      (data) => {
        this.post = data;
      },
      (error) => {
        console.log('Error while GET post', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
