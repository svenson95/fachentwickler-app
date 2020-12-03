import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Mitteilungen');
  }

  ngOnInit(): void {
  }

}
