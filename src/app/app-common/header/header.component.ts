import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('mobileQuery') mobileQuery;
  @Input('searchValue') searchValue;
  @Input('sidenav') sidenav;
  @Input('darkMode') darkMode;
  @Input('toggleTheme') toggleTheme;

  constructor(public router: Router,
              public headerService: HeaderService
  ) {}

  ngOnInit(): void {}

}
