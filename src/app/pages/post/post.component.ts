import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Post} from '../../models/post';
import {Router} from '@angular/router';
import {HeaderService} from '../../services/header.service';
import {subjects} from '../../../data/menu-items';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private dataService: DataService,
              private router: Router,
              private headerService: HeaderService
  ) {
    this.dataService.getPost(router.url).subscribe(
      (data) => {
        this.post = data;
        this.headerService.setPageTitle(
          subjects.find(sub => sub.url.substr(1) === this.post.subject
        )?.title);
      },
      (error) => {
        console.log('Error while GET post', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
