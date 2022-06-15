import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'fe-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss'],
})
export class LogoutDialogComponent {
  constructor(private router: Router, private snackBar: MatSnackBar, public authService: AuthService) {}

  public logout(): void {
    const guardRoutes = this.router.config.filter((r) => r.canActivate).map((r) => r.path);

    this.authService.invalidate().subscribe(
      () => {
        if (guardRoutes.includes(this.router.url.substr(1))) {
          this.router.navigateByUrl('/');
        }

        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Erfolgreich abgemeldet',
        });
      },
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler beim Abmelden aufgetreten',
        });
      },
    );
  }
}
