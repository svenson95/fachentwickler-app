import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { AuthUser } from '../../models/user';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fe-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  @ViewChild('passwordInput') passwordInput;

  formGroup: FormGroup;
  username: FormControl;
  password: FormControl;
  loading = false;

  invalidPassword: boolean;
  InvalidPassword: ValidatorFn = (ac): ValidationErrors => {
    if (this.invalidPassword) {
      return { invalidPassword: true };
    } else {
      return null;
    }
  }

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
    this.username = new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.password = new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), this.InvalidPassword],
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
        console.log(error);
        this.loading = false;
        this.invalidPassword = true;
        this.passwordInput.nativeElement.blur();
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Die eingegebenen Benutzerdaten sind falsch. Probiere es erneut.'
        });
      }
    );
  }

  onFormChange(event): void {
    this.username.setErrors(null);
    this.password.setErrors(null);
    this.invalidPassword = false;
  }

  usernameFieldKeyPress(event): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.passwordInput.nativeElement.focus();
    }
  }

}
