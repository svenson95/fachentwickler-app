import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarComponent } from '../../../app-common/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'fe-logout-dialog',
  templateUrl: './logout-dialog.component.html'
})
export class LogoutDialogComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.invalidate().subscribe(
      response => {
        this.router.navigateByUrl('/');
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Du hast dich erfolgreich abgemeldet'
        });
      }, error => {
        this.router.navigateByUrl('/');
        console.log('error logout', error);
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler beim Abmelden aufgetreten'
        });
      }
    );
  }

}
