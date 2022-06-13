import { Component } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'fe-messages-page',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage {
  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Mitteilungen');
  }
}
