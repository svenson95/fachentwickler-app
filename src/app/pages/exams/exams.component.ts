import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Klausuren');
  }

  ngOnInit(): void {
  }

}
