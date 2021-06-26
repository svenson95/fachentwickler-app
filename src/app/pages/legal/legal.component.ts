import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'fe-legal',
  templateUrl: './legal.component.html'
})
export class LegalComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Impressum');
  }

  ngOnInit(): void {
  }

}
