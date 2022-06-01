import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-teacher-files-page',
  templateUrl: './teacher-files.page.html',
})
export class TeacherFilesPage {
  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Lehrmaterial');
  }
}
