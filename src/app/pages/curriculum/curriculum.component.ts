import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Lehrplan');
  }

  ngOnInit(): void {
  }

}
