import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {SnackbarComponent} from '../../app-common/snackbar/snackbar.component';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
