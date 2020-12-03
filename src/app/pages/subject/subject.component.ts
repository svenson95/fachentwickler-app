import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subject} from '../../models/subject';
import {subjects} from '../../../data/menu-items';
import {DataService} from '../../services/data.service';
import {HeaderService} from '../../services/header.service';
import {Subscription} from 'rxjs';
import {PostType} from '../../models/post-type';

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

  badgeTranslator(text: PostType): string {
    if (text === PostType.ARTICLE) {
      return 'Artikel';
    } else if (text === PostType.TASKS) {
      return 'Aufgaben';
    } else if (text === PostType.INDEX_CARDS) {
      return 'Karteikarten';
    } else if (text === PostType.QUIZ) {
      return 'Quiz';
    }
  }

}
