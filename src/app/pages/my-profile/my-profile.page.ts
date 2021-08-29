import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { ThemeService } from '../../services/theme.service';
import { LoadingService } from '../../services/loading.service';

import { inputsMatch } from '../../validators/match.validator';

@Component({
  selector: 'fe-my-profile-page',
  templateUrl: './my-profile.page.html'
})
export class MyProfilePage implements OnInit, OnDestroy {

  isConfirmingEmail: boolean;
  isConfirmingPassword: boolean;

  isLoading: boolean;
  loadingSubscription: Subscription;

  emailFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  name: FormControl;
  email: FormControl;
  verificationCode: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  role: FormControl;
  progress: FormControl;
  theme: FormControl;

  @ViewChild('nameInput') nameInput: MatInput;
  @ViewChild('emailInput') emailInput: MatInput;
  @ViewChild('passwordInput') passwordInput: MatInput;

  constructor(private headerService: HeaderService,
              public authService: AuthService,
              public themeService: ThemeService,
              private dataService: DataService,
              private loadingService: LoadingService,
              private matSnackBar: MatSnackBar,
              private formBuilder: FormBuilder
  ) {
    this.headerService.setPageTitle('Mein Profil');
    this.initFormControls();
    this.initFormGroups();
  }

  ngOnInit(): void {
    this.initUserProgress();
    this.loadingSubscription = this.loadingService.loading$.subscribe(value => this.isLoading = value);
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  initUserProgress(): void {
    if (this.dataService.dashboard === undefined) {
      this.dataService.getAllLessons().subscribe(
        (lessons) => this.progress.setValue(this.getProgressPercentage(lessons.length))
      );
    } else {
      this.progress.setValue(this.getProgressPercentage(this.dataService.dashboard.allLessons.length));
    }
  }

  getProgressPercentage(progressLength): string {
    return ((this.authService.user.progress.length / progressLength) * 100).toFixed(2) + ' %';
  }

  initFormControls(): void {
    this.name = new FormControl({ value: this.authService.user.name, disabled: true }, {
      validators: [Validators.required, Validators.minLength(4)]
    });
    this.email = new FormControl({ value: this.authService.user.email, disabled: true }, {
      validators: [Validators.required, Validators.email]
    });
    this.verificationCode = new FormControl('', {
      validators: [Validators.required]
    });
    this.password = new FormControl({ value: 'xxxxxxxx', disabled: true }, {
      validators: [Validators.required, Validators.minLength(4)]
    });
    this.confirmPassword = new FormControl('', {
      validators: [inputsMatch('password')]
    });
    this.role = new FormControl({ value: this.authService.user.role, disabled: true });
    this.progress = new FormControl({ value: 0, disabled: true });
    this.theme = new FormControl({ value: this.themeService.getActiveTheme().name, disabled: true });
  }

  initFormGroups(): void {
    this.emailFormGroup = this.formBuilder.group({
      email: this.email,
      verificationCode: this.verificationCode
    });

    this.passwordFormGroup = this.formBuilder.group({
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }

  resetProgress(): void {

  }

  markAllPostsAsRead(): void {

  }

  toggleChangeName(): void {
    if (this.name.disabled) {
      this.name.enable();
      this.nameInput.focus();
    } else {
      this.name.reset();
      this.name.setValue(this.authService.user.name);
      this.name.disable();
    }
  }

  saveChangeName(): void {
    if (this.name.invalid) {
      return;
    }

    this.authService.editUser({ _id: this.authService.user._id, newName: this.name.value.toLowerCase() }).subscribe(
      (response) => {
        this.name.disable();
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Benutzername wurde geändert'
        });
      }, (errorRes) => {
        this.name.setValue(this.authService.user.name);
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof errorRes === 'string' ? errorRes : errorRes.error.message
        });
      }
    );
  }

  toggleChangeEmail(): void {
    if (this.email.disabled) {
      this.email.enable();
      this.emailInput.focus();
    } else {
      this.email.reset();
      this.email.setValue(this.authService.user.email);
      this.email.disable();
      this.verificationCode.reset();
      this.verificationCode.setValue('');
      this.isConfirmingEmail = undefined;
    }
  }

  saveChangeEmail(): void {
    if (this.email.invalid) {
      return;
    }
    const {email} = this.emailFormGroup.value;

    this.authService.editUser({ _id: this.authService.user._id, email }).subscribe(
      (response) => {
        this.isConfirmingEmail = true;

        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Verifizierungscode versendet'
        });
      }, (errorRes) => {
        this.emailFormGroup.controls.email.setValue(this.authService.user.email);
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof errorRes === 'string' ? errorRes : errorRes.error.message
        });
      }
    );
  }

  confirmChangedEmail(): void {
    if (this.emailFormGroup.invalid) {
      return;
    }
    const {email, verificationCode} = this.emailFormGroup.value;

    this.authService.verifyUser(this.authService.user.email, verificationCode, email)
      .subscribe(
        (response) => {
          if (response.success) {
            this.email.disable();
            this.matSnackBar.openFromComponent(SnackbarComponent, {
              duration: 3000,
              data: 'E-Mail wurde geändert'
            });
            this.isConfirmingEmail = undefined;
          }
        }, (error) => {
          if (error.error.code === 'TokenNotFoundException') {
            return this.verificationCode.setErrors({ incorrect: true });
          }
        }
      );
  }

  toggleChangePassword(): void {
    if (this.password.disabled) {
      this.password.setValue('');
      this.password.enable();
      this.passwordInput.focus();
    } else {
      this.password.reset();
      this.password.setValue(this.authService.user.password.substring(0, 8));
      this.password.disable();
      this.confirmPassword.reset();
      this.confirmPassword.setValue('');
      this.isConfirmingPassword = undefined;
    }
  }

  saveChangePassword(): void {
    if (this.password.invalid) {
      return;
    }

    if (!this.isConfirmingPassword) {
      this.isConfirmingPassword = true;
    } else {
      if (this.confirmPassword.invalid) {
        return;
      }

      const {confirmPassword} = this.passwordFormGroup.value;

      this.authService.editUser({ _id: this.authService.user._id, password: confirmPassword }).subscribe(
        (response) => {
          this.password.disable();
          this.password.setValue('xxxxxxxx');
          this.password.markAsUntouched();
          this.confirmPassword.markAsUntouched();
          this.isConfirmingPassword = undefined;
          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Passwort wurde geändert'
          });
        }, (errorRes) => {
          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Fehler: ' + typeof errorRes === 'string' ? errorRes : errorRes.error.message
          });
        }
      );
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.theme.setValue(this.themeService.getActiveTheme().name);
  }

  saveChangeTheme(): void {
    this.authService.editUser({ _id: this.authService.user._id, theme: this.theme.value }).subscribe(
      (response) => {
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Standard-Theme wurde geändert'
        });
      }, (errorRes) => {
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof errorRes === 'string' ? errorRes : errorRes.error.message
        });
      }
    );
  }
}