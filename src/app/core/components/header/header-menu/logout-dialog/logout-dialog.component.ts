import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss'],
})
export class LogoutDialogComponent {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private user: UserService,
  ) {}

  public logout(): void {
    const guardRoutes = this.router.config.filter((r) => r.canActivate).map((r) => r.path);

    this.auth.invalidate().subscribe(
      () => {
        if (guardRoutes.includes(this.router.url.substr(1))) {
          this.router.navigateByUrl('/');
        }
        this.user.resetData();

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
