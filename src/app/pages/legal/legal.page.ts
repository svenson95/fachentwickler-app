import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'fe-legal-page',
  templateUrl: './legal.page.html'
})
export class LegalPage implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Impressum');
  }

  ngOnInit(): void {
  }

}
