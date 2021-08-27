import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { Subscription } from 'rxjs';

import { RegisterUser, UserRole } from '../../models/user';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fe-register-page',
  templateUrl: './register.page.html'
})
export class RegisterPage implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading: boolean;
  subscription: Subscription = new Subscription();

  nameAlreadyTaken: boolean;
  emailAlreadyTaken: boolean;

  NameAlreadyTaken: ValidatorFn = (ac): ValidationErrors => {
    if (this.nameAlreadyTaken) {
      return { alreadyTaken: true };
    } else {
      return null;
    }
  }

  EmailAlreadyTaken: ValidatorFn = (ac): ValidationErrors => {
    if (this.emailAlreadyTaken) {
      return { alreadyTaken: true };
    } else {
      return null;
    }
  }

  constructor(private router: Router,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private headerService: HeaderService,
              private authService: AuthService,
              private loadService: LoadingService,
              private themeService: ThemeService
  ) {
    this.headerService.setPageTitle('Registrieren');
    this.initFormGroup();
  }

  ngOnInit(): void {
    this.subscription.add(this.loadService.loading$.subscribe(value => this.isLoading = value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initFormGroup(): void {
    this.form = this.fb.group({
      name: [null as string, { validators: [Validators.required, Validators.minLength(4), this.NameAlreadyTaken] }],
      email: [null as string, { validators: [Validators.required, Validators.email, this.EmailAlreadyTaken] }],
      password: [null as string, { validators: [Validators.required, Validators.minLength(4)] }]
    });
  }

  register(event): void {

    if (this.form.invalid) {
      return;
    }

    const name = this.form.controls.name.value.toLowerCase();
    const email = this.form.controls.email.value.toLowerCase();
    const password = this.form.controls.password.value.toLowerCase();
    const user = {
      name, email, password,
      theme: this.themeService.getActiveTheme().name,
      role: UserRole.USER
    } as RegisterUser;

    this.authService.register(user).subscribe(
      (value) => {
        this.router.navigateByUrl('/dashboard');
      }, (error) => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: this.showErrorMessage(error)
        });
      }
    );
  }

  showErrorMessage(response): string {
    if (response.status === 401) {
      return 'Die eingegebenen Daten sind nicht korrekt';
    } else if (response.status === 400) {
      return 'Die eingegebenen Daten sind ungültig (Name/Passwort zu kurz oder lang)';
    } else if (response.error.message === 'Username is already taken') {
      this.nameAlreadyTaken = true;
      this.form.setErrors({ alreadyTaken: true });
      this.form.markAsDirty({ onlySelf: false });
      return 'Der Benutzername ist bereits vergeben';
    } else if (response.error.message === 'E-Mail is already taken') {
      this.emailAlreadyTaken = true;
      this.form.setErrors({ alreadyTaken: true });
      this.form.markAsDirty({ onlySelf: false });
      return 'Die E-Mail Adresse ist bereits vergeben';
    } else {
      return 'Unbekannter Fehler: ' + response.error.message;
    }
  }

  onFormChange(event): void {
    if (this.nameAlreadyTaken) {
      this.nameAlreadyTaken = false;
    }
    if (this.emailAlreadyTaken) {
      this.emailAlreadyTaken = false;
    }
  }

}
