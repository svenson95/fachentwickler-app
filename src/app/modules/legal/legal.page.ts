import { Component } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'fe-legal-page',
  templateUrl: './legal.page.html',
  styleUrls: ['./legal.page.scss'],
})
export class LegalPage {
  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Impressum');
  }
}
