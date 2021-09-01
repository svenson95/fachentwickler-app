import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { AuthUser } from '../../models/user';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fe-login-page',
  templateUrl: './login.page.html'
})
export class LoginPage implements OnInit, OnDestroy {
  @ViewChild('passwordInput') passwordInput;

  form: FormGroup;
  isLoading: boolean;
  private loadingSubscription: Subscription;

  constructor(private router: Router,
              private authService: AuthService,
              private headerService: HeaderService,
              private themeService: ThemeService,
              private loadService: LoadingService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder
  ) {
    if (authService.isAuthenticated) {
      this.router.navigate(['dashboard']);
    }

    this.headerService.setPageTitle('Login');
    this.initFormGroup();
    this.loadingSubscription = this.loadService.loading$.subscribe(value => {
      this.isLoading = value;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  private initFormGroup(): void {
    const passwordValidators = [Validators.required, Validators.minLength(4)];

    this.form = this.fb.group({
      username: [null as string, { validators: passwordValidators, updateOn: 'submit' }],
      password: [null as string, { validators: passwordValidators, updateOn: 'submit' }]
    });
  }

  private redirectTo(url): void {
    this.router.navigateByUrl(url);
    this.authService.redirectUrl = undefined;
  }

  login(event): void {

    if (this.form.invalid) {
      return;
    }

    const username = this.form.get('username').value.toLowerCase();
    const password = this.form.get('password').value;

    this.authService.login({username, password} as AuthUser).subscribe(
      (response) => {
        if (this.themeService.getActiveTheme().name !== response.user.theme) {
          this.themeService.toggleTheme();
        }

        if (this.authService.redirectUrl) {
          this.redirectTo(this.authService.redirectUrl);
        } else {
          this.router.navigate(['dashboard']);
        }
      }, (error) => {
        console.log(error);
        this.passwordInput.nativeElement.blur();
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Die eingegebenen Benutzerdaten sind falsch. Probiere es erneut.'
        });
      }
    );
  }

  resetErrors(event): void {
    this.form.controls.username.setErrors(null);
    this.form.controls.password.setErrors(null);
  }

  usernameFieldKeyPress(event): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.passwordInput.nativeElement.focus();
    }
  }

}
