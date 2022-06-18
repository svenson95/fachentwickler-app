import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
export class SubjectPage {
  public subject: SubjectPopulated;

  public PostType = PostType;

  public get subjectIcon(): string {
    const sub = subjects.find((s) => s.url === this.router.url);
    return sub.icon.slice(0, -8);
  }

  constructor(private router: Router, private data: DataService, private header: HeaderService) {
    const subject = subjects.find((sub) => sub.url === router.url);
    this.header.setPageTitle(subject.title);

    this.data.getSubject(this.router.url.substring(1)).subscribe((response) => {
      this.subject = response;
    });
  }
}
