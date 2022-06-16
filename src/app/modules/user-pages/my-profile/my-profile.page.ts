import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthService } from '@services/auth.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';
import { ThemeService } from '@services/theme.service';
import { inputsMatch } from '@validators/match.validator';
import { DashboardService } from '@services/dashboard.service';
import { UserService } from '@services/user.service';
import { EditEmailBody, EditNameBody, EditPasswordBody, EditThemeBody } from '@models/user';

@Component({
  selector: 'fe-my-profile-page',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit, OnDestroy {
  @ViewChild('nameInput') public nameInput: MatInput;

  @ViewChild('emailInput') public emailInput: MatInput;

  @ViewChild('passwordInput') public passwordInput: MatInput;

  public name = new FormControl(
    { value: this.user.data.name, disabled: true },
    { validators: [Validators.required, Validators.minLength(4)] },
  );

  public email = new FormControl(
    { value: this.user.data.email, disabled: true },
    { validators: [Validators.required, Validators.email] },
  );

  public verificationCode = new FormControl('', {
    validators: [Validators.required],
  });

  public password = new FormControl(
    { value: 'xxxxxxxx', disabled: true },
    { validators: [Validators.required, Validators.minLength(4)] },
  );

  public confirmPassword = new FormControl('', {
    validators: [inputsMatch('password')],
  });

  public role = new FormControl({
    value: this.user.data.role,
    disabled: true,
  });

  public progress = new FormControl({ value: 0, disabled: true });

  public theme = new FormControl({
    value: this.themeService.getActiveTheme().name,
    disabled: true,
  });

  public emailFormGroup = this.formBuilder.group({
    email: this.email,
    verificationCode: this.verificationCode,
  });

  public passwordFormGroup = this.formBuilder.group({
    password: this.password,
    confirmPassword: this.confirmPassword,
  });

  public isConfirmingEmail: boolean;

  public isConfirmingPassword: boolean;

  public isLoading: boolean;

  private loadingSubscription: Subscription;

  constructor(
    private headerService: HeaderService,
    private auth: AuthService,
    public user: UserService,
    public themeService: ThemeService,
    private dashboard: DashboardService,
    private loading: LoadingService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {
    this.headerService.setPageTitle('Mein Profil');
  }

  public ngOnInit(): void {
    this.loadingSubscription = this.loading.loading$.subscribe((value) => {
      this.isLoading = value;
    });

    this.initUserProgress();
  }

  public ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  // eslint-disable-next-line class-methods-use-this
  public resetProgress(): void {
    // TODO: implement backend endpoint to reset progress
  }

  // eslint-disable-next-line class-methods-use-this
  public markAllPostsAsRead(): void {
    // TODO: implement backend endpoint to mark all posts as read
  }

  public toggleChangeName(): void {
    if (this.name.disabled) {
      this.name.enable();
      this.nameInput.focus();
    } else {
      this.name.reset();
      this.name.setValue(this.user.data.name);
      this.name.disable();
    }
  }

  public saveChangeName(): void {
    if (this.name.invalid) return;

    const data: EditNameBody = {
      _id: this.user.data._id,
      newName: this.name.value.toLowerCase(),
    };

    this.user.edit(data).subscribe(
      () => {
        this.name.disable();
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Benutzername wurde geändert',
        });
      },
      (errorRes) => {
        this.name.setValue(this.user.data.name);
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler: ${typeof errorRes}` === 'string' ? errorRes : errorRes.error.message,
        });
      },
    );
  }

  public toggleChangeEmail(): void {
    if (this.email.disabled) {
      this.email.enable();
      this.emailInput.focus();
    } else {
      this.email.reset();
      this.email.setValue(this.user.data.email);
      this.email.disable();
      this.verificationCode.reset();
      this.verificationCode.setValue('');
      this.isConfirmingEmail = undefined;
    }
  }

  public saveChangeEmail(): void {
    if (this.email.invalid) return;

    const data: EditEmailBody = { _id: this.user.data._id, email: this.email.value };
    this.user.edit(data).subscribe(
      () => {
        this.isConfirmingEmail = true;

        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Verifizierungscode versendet',
        });
      },
      (errorRes) => {
        this.emailFormGroup.controls.email.setValue(this.user.data.email);
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler: ${typeof errorRes}` === 'string' ? errorRes : errorRes.error.message,
        });
      },
    );
  }

  public confirmChangedEmail(): void {
    if (this.emailFormGroup.invalid) return;
    const { email, verificationCode } = this.emailFormGroup.value;

    this.auth.verify(this.user.data.email, verificationCode, email).subscribe(
      (response) => {
        if (response.success) {
          this.user.data = response.data.user;
          this.user.storeData();
          this.email.disable();

          this.snackbar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'E-Mail wurde geändert',
          });
          this.isConfirmingEmail = undefined;
        }
      },
      (error) => {
        if (error.error.code === 'TokenNotFoundException') {
          this.verificationCode.setErrors({ incorrect: true });
        }
      },
    );
  }

  public toggleChangePassword(): void {
    if (this.password.disabled) {
      this.password.setValue('');
      this.password.enable();
      this.passwordInput.focus();
    } else {
      this.password.reset();
      this.password.setValue(this.user.data.password.substring(0, 8));
      this.password.disable();
      this.confirmPassword.reset();
      this.confirmPassword.setValue('');
      this.isConfirmingPassword = undefined;
    }
  }

  public saveChangePassword(): void {
    if (this.password.invalid) return;

    if (!this.isConfirmingPassword) {
      this.isConfirmingPassword = true;
    } else {
      if (this.confirmPassword.invalid) return;

      const data: EditPasswordBody = { _id: this.user.data._id, password: this.confirmPassword.value };
      this.user.edit(data).subscribe(
        () => {
          this.password.disable();
          this.password.setValue('xxxxxxxx');
          this.password.markAsUntouched();
          this.confirmPassword.markAsUntouched();
          this.isConfirmingPassword = undefined;

          this.snackbar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Passwort wurde geändert',
          });
        },
        (errorRes) => {
          this.snackbar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: `Fehler: ${typeof errorRes}` === 'string' ? errorRes : errorRes.error.message,
          });
        },
      );
    }
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
    this.theme.setValue(this.themeService.getActiveTheme().name);
  }

  public saveChangeTheme(): void {
    const data: EditThemeBody = { _id: this.user.data._id, theme: this.theme.value };
    this.user.edit(data).subscribe(
      () => {
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Standard-Theme wurde geändert',
        });
      },
      (errorRes) => {
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler: ${typeof errorRes}` === 'string' ? errorRes : errorRes.error.message,
        });
      },
    );
  }

  private async initUserProgress(): Promise<void> {
    const allLessons = await this.dashboard.allLessons$.toPromise();
    this.progress.setValue(this.getProgressPercentage(allLessons.length));
  }

  private getProgressPercentage(progressLength: number): string {
    return `${((this.user.data.progress.length / progressLength) * 100).toFixed(2)} %`;
  }
}
