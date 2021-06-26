import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Subject } from '../../models/subject';
import { PostType } from '../../models/post-type';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { subjects } from '../../../data/menu-items';

@Component({
  selector: 'fe-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit, OnDestroy {

  data: any;
  subject: Subject;
  subjectTitle: string;
  ROUTER_EVENT: Subscription;
  PostType = PostType;

  constructor(private router: Router,
              private elRef: ElementRef,
              private dataService: DataService,
              private headerService: HeaderService
  ) {
    this.ROUTER_EVENT = this.router.events.subscribe((nav) => {
      if (nav instanceof NavigationEnd) {
        this.subjectTitle = subjects.find(sub => sub.url === nav.url)?.title;
        this.headerService.setPageTitle(this.subjectTitle);
        this.dataService.getSubject(nav.url.substr(1)).subscribe(
          (data) => {
            this.subject = data;
          },
          (error) => {
            console.log('Error while GET subject', error);
          }
        );
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.ROUTER_EVENT.unsubscribe();
  }

}
