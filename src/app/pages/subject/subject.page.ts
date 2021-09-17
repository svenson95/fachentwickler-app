import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Subject } from '../../models/subject';
import { PostType } from '../../models/post-type';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { subjects } from '../../constants/menu-items';

@Component({
  selector: 'fe-subject-page',
  templateUrl: './subject.page.html'
})
export class SubjectPage implements OnInit, OnDestroy {

  data: any;
  subject: Subject;
  subjectTitle: string;
  subscription: Subscription = new Subscription();
  PostType = PostType;

  constructor(public router: Router,
              private elRef: ElementRef,
              private dataService: DataService,
              private headerService: HeaderService
  ) {
    const subject = subjects.find(sub => sub.url === router.url);
    this.headerService.setPageTitle(subject.title);
    this.subjectTitle = subject.title;
  }

  ngOnInit(): void {
    this.loadSubjectBy(this.router.url);
    this.subscription.add(this.router.events.subscribe((nav) => {
      if (nav instanceof NavigationEnd) {
        this.loadSubjectBy(nav.url);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadSubjectBy(url): void {
    this.dataService.getSubject(url).subscribe(
      (data) => this.subject = data,
      (error) => console.log('Error while GET subject', error)
    );
  }

}
