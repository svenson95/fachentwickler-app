import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
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
        console.log('response logout', response);
        this.router.navigateByUrl('/');
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Erfolgreich abgemeldet'
        });
      }, error => {
        this.router.navigateByUrl('/');
        console.log('error logout', error);
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler beim Abmelden'
        });
      }
    );
  }

}
