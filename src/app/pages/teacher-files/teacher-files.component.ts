import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-teacher-files',
  templateUrl: './teacher-files.component.html'
})
export class TeacherFilesComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Lehrmaterial');
  }

  ngOnInit(): void {
  }

}
