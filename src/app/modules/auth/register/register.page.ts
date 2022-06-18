import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { RegisterUser, UserRole } from '@models/user';
import { AuthService } from '@services/auth.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';
import { ThemeService } from '@services/theme.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  public form: FormGroup;

  public isLoading: boolean;

  private subscription: Subscription = new Subscription();

  private nameAlreadyTaken: boolean;

  private emailAlreadyTaken: boolean;

  private NameAlreadyTaken: ValidatorFn = (): ValidationErrors => {
    if (this.nameAlreadyTaken) {
      return { alreadyTaken: true };
    }
    return null;
  };

  private EmailAlreadyTaken: ValidatorFn = (): ValidationErrors => {
    if (this.emailAlreadyTaken) {
      return { alreadyTaken: true };
    }
    return null;
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private headerService: HeaderService,
    private auth: AuthService,
    private user: UserService,
    private loading: LoadingService,
    private theme: ThemeService,
  ) {
    this.headerService.setPageTitle('Registrieren');
    this.initFormGroup();
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.loading.loading$.subscribe((value) => {
        this.isLoading = value;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onFormChange(): void {
    if (this.nameAlreadyTaken) {
      this.nameAlreadyTaken = false;
    }
    if (this.emailAlreadyTaken) {
      this.emailAlreadyTaken = false;
    }
  }

  public register(): void {
    if (this.form.invalid) {
      return;
    }

    const name = this.form.controls.name.value.toLowerCase();
    const email = this.form.controls.email.value.toLowerCase();
    const password = this.form.controls.password.value.toLowerCase();
    const user = {
      name,
      email,
      password,
      theme: this.theme.getActiveTheme(),
      role: UserRole.USER,
    } as RegisterUser;

    this.auth.register(user).subscribe(
      (response) => {
        if (response.success) {
          this.router.navigateByUrl('/dashboard');
          this.user.isAuthenticated = true;
          this.user.data = response.data.user;
          this.user.storeData();
        }
      },
      (error) => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: this.showErrorMessage(error),
        });
      },
    );
  }

  private initFormGroup(): void {
    this.form = this.fb.group({
      name: [
        null as string,
        {
          validators: [Validators.required, Validators.minLength(4), this.NameAlreadyTaken],
        },
      ],
      email: [
        null as string,
        {
          validators: [Validators.required, Validators.email, this.EmailAlreadyTaken],
        },
      ],
      password: [null as string, { validators: [Validators.required, Validators.minLength(4)] }],
    });
  }

  private showErrorMessage(response): string {
    if (response.status === 401) {
      return 'Die eingegebenen Daten sind nicht korrekt';
    }
    if (response.status === 400) {
      return 'Die eingegebenen Daten sind ungültig (Name/Passwort zu kurz oder lang)';
    }
    if (response.error.message === 'Username is already taken') {
      this.nameAlreadyTaken = true;
      this.form.setErrors({ alreadyTaken: true });
      this.form.markAsDirty({ onlySelf: false });
      return 'Der Benutzername ist bereits vergeben';
    }
    if (response.error.message === 'E-Mail is already taken') {
      this.emailAlreadyTaken = true;
      this.form.setErrors({ alreadyTaken: true });
      this.form.markAsDirty({ onlySelf: false });
      return 'Die E-Mail Adresse ist bereits vergeben';
    }
    return `Unbekannter Fehler: ${response.error.message}`;
  }
}
