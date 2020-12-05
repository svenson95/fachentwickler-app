import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../../components/logout-dialog/logout-dialog.component';

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
              public headerService: HeaderService,
              public authService: AuthService,
              public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openLogoutDialog(): void {
    this.dialog.open(LogoutDialogComponent, { restoreFocus: true });
  }

}
