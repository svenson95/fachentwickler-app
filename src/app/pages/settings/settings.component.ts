import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Einstellungen');
  }

  ngOnInit(): void {
  }

}
