import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { subjects } from '@constants/menu-items';
import { PostType } from '@enums/post-type';
import { SubjectPopulated } from '@models/subject';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';

@Component({
  selector: 'fe-subject-page',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit, OnDestroy {
  public subject: SubjectPopulated;

  private subscription: Subscription = new Subscription();

  public PostType = PostType;

  constructor(public router: Router, private dataService: DataService, private headerService: HeaderService) {
    const subject = subjects.find((sub) => sub.url === router.url);
    this.headerService.setPageTitle(subject.title);
  }

  public ngOnInit(): void {
    this.loadSubjectBy(this.router.url);
    this.subscription.add(
      this.router.events.subscribe((nav) => {
        if (nav instanceof NavigationEnd) {
          this.loadSubjectBy(nav.url);
        }
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadSubjectBy(url: string): void {
    this.dataService.getSubject(url).subscribe((data) => {
      this.subject = data;
    });
  }
}
