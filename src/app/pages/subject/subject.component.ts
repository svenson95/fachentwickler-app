import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from '../../models/subject';
import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { Subscription } from 'rxjs';
import { PostType } from '../../models/post-type';
import { transformDate } from '../../app-common/transform-date';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  data: any;
  subject: Subject;
  subjectTitle: string;
  ROUTER_EVENT: Subscription;
  PostType = PostType;
  transformDate = transformDate;

  constructor(private router: Router,
              private elRef: ElementRef,
              private dataService: DataService,
              private headerService: HeaderService
  ) {
    this.ROUTER_EVENT = this.router.events.subscribe((nav) => {
      if (nav instanceof NavigationEnd) {
        this.subjectTitle = subjects.find(sub => sub.url === nav.url)?.title;
        this.headerService.setPageTitle(this.subjectTitle);
        this.loadSubject(nav);
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.ROUTER_EVENT.unsubscribe();
  }

  loadSubject(nav): void {
    this.dataService.getSubject(nav.url.substr(1)).subscribe(
      (data) => {
        this.subject = data;
      },
      (error) => {
        console.log('Error while GET subject', error);
      }
    );
  }

}
