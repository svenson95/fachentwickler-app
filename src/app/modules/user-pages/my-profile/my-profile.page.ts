import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthService } from '@services/auth.service';
import { HeaderService } from '@services/header.service';
import { LoadingService } from '@services/loading.service';
import { ThemeService } from '@services/theme.service';
import { DashboardService } from '@services/dashboard.service';
import { UserService } from '@services/user.service';
import { EditEmailBody, EditNameBody, EditPasswordBody, EditThemeBody, Theme, UserData } from '@models/user';
import { inputsMatch } from '@validators/match.validator';

@Component({
  selector: 'fe-my-profile-page',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit, OnDestroy {
  @ViewChild('nameInput') public nameInput: MatInput;

  @ViewChild('emailInput') public emailInput: MatInput;

  @ViewChild('passwordInput') public passwordInput: MatInput;

  public Theme = Theme;

  public userData: UserData;

  public name: FormControl;

  public email: FormControl;

  public verificationCode: FormControl;

  public password: FormControl;

  public confirmPassword: FormControl;

  public role: FormControl;

  public progress: FormControl;

  public theme: FormControl;

  public emailFormGroup: FormGroup;

  public passwordFormGroup: FormGroup;

  public isConfirmingEmail: boolean;

  public isConfirmingPassword: boolean;

  public isLoading: boolean;

  private subscription: Subscription;

  constructor(
    private headerService: HeaderService,
    private auth: AuthService,
    private user: UserService,
    public themeService: ThemeService,
    private dashboard: DashboardService,
    private loading: LoadingService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {
    this.headerService.setPageTitle('Mein Profil');

    this.user.data$.subscribe((data) => {
      this.userData = data;
    });

    this.subscription = this.loading.loading$.subscribe((value) => {
      this.isLoading = value;
    });
  }

  public ngOnInit(): void {
    this.initForms();
    this.initUserProgress();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public resetProgress(): void {
    // TODO: implement backend endpoint to reset progress
  }

  public markAllPostsAsRead(): void {
    // TODO: implement backend endpoint to mark all posts as read
  }

  public toggleChangeName(): void {
    if (this.name.disabled) {
      this.name.enable();
      this.nameInput.focus();
    } else {
      this.name.reset();
      this.name.setValue(this.userData.name);
      this.name.disable();
    }
  }

  public saveChangeName(): void {
    if (this.name.invalid) return;

    const data: EditNameBody = {
      _id: this.userData._id,
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
        this.name.setValue(this.userData.name);
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
      this.email.setValue(this.userData.email);
      this.email.disable();
      this.verificationCode.reset();
      this.verificationCode.setValue('');
      this.isConfirmingEmail = undefined;
    }
  }

  public saveChangeEmail(): void {
    if (this.email.invalid) return;

    const data: EditEmailBody = { _id: this.userData._id, email: this.email.value };
    this.user.edit(data).subscribe(
      () => {
        this.isConfirmingEmail = true;

        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Verifizierungscode versendet',
        });
      },
      (error) => {
        this.emailFormGroup.controls.email.setValue(this.userData.email);
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: typeof error === 'string' ? `Fehler: ${error}` : `${error.message}`,
        });
      },
    );
  }

  public confirmChangedEmail(): void {
    if (this.emailFormGroup.invalid) return;
    this.auth.verify(this.userData.email, this.verificationCode.value, this.email.value).subscribe(
      (response) => {
        if (response.success) {
          this.email.disable();
          this.user.setData(response.data.user);
          this.user.storeData();

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
      this.password.setValue(this.userData.password.substring(0, 8));
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

      const data: EditPasswordBody = { _id: this.userData._id, password: this.confirmPassword.value };
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
    this.theme.setValue(this.themeService.activeThemeTranslated);
  }

  public saveChangeTheme(): void {
    const theme = this.themeService.activeTheme;
    const data: EditThemeBody = { _id: this.userData._id, theme };

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

  private initForms(): void {
    this.emailFormGroup = this.formBuilder.group({
      email: this.email,
      verificationCode: this.verificationCode,
    });
    this.email = new FormControl(
      { value: this.userData.email, disabled: true },
      { validators: [Validators.required, Validators.email] },
    );
    this.verificationCode = new FormControl('', {
      validators: [Validators.required],
    });

    this.passwordFormGroup = this.formBuilder.group({
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
    this.password = new FormControl(
      { value: 'xxxxxxxx', disabled: true },
      { validators: [Validators.required, Validators.minLength(4)] },
    );
    this.confirmPassword = new FormControl('', {
      validators: [inputsMatch('password')],
    });

    this.name = new FormControl(
      { value: this.userData.name, disabled: true },
      { validators: [Validators.required, Validators.minLength(4)] },
    );

    this.role = new FormControl({
      value: this.userData.role.toLowerCase(),
      disabled: true,
    });
    this.progress = new FormControl({ value: 0, disabled: true });
    this.theme = new FormControl({
      value: this.themeService.activeThemeTranslated,
      disabled: true,
    });
  }

  private async initUserProgress(): Promise<void> {
    const allLessons = await this.dashboard.allLessons$.toPromise();
    this.progress.setValue(this.percentageString(allLessons.length));
  }

  private percentageString(progressLength: number): string {
    return `${((this.userData.progress.length / progressLength) * 100).toFixed(2)} %`;
  }
}
