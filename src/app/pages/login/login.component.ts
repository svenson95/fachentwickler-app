import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { ThemeService } from '../../services/theme.service';

import { AuthUser } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  username: FormControl;
  password: FormControl;
  loading = false;

  constructor(private router: Router,
              private authService: AuthService,
              private headerService: HeaderService,
              private themeService: ThemeService,
              private loadService: LoadingService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder
  ) {
    if (authService.isAuthenticated) {
      router.navigate(['dashboard']);
    }

    this.headerService.setPageTitle('Login');
    this.username = new FormControl('test', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.password = new FormControl('test', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.formGroup = formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  login(event): void {

    if (this.formGroup.invalid) {
      return;
    }

    this.loading = true;
    const username = this.formGroup.get('username').value.toLowerCase();
    const password = this.formGroup.get('password').value.toLowerCase();

    this.authService.login({username, password} as AuthUser).subscribe(
      (response) => {
        if (this.themeService.getActiveTheme().name !== response.user.theme) {
          this.themeService.toggleTheme();
        }
        this.router.navigateByUrl('/dashboard');
        this.loading = false;
      }, (error) => {
        console.log('ERROR login');
        console.log(error);
        this.loading = false;
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Login fehlgeschlagen'
        });
      }
    );
  }

}
