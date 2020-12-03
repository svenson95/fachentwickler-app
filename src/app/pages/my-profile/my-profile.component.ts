import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Mein Profil');
  }

  ngOnInit(): void {
  }

}
