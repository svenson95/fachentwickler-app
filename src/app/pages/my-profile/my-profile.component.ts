import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { EditUser, User } from '../../models/user';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { ThemeService } from '../../services/theme.service';
import { inputsMatch } from '../../validators/match.validator';

@Component({
  selector: 'fe-my-profile',
  templateUrl: './my-profile.component.html'
})
export class MyProfileComponent implements OnInit {

  user: User;
  isChangingEmail: boolean;
  isConfirmingPassword: boolean;
  progressPercentage: number;

  formGroup: FormGroup;
  username: FormControl;
  email: FormControl;
  verificationCode: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  role: FormControl;
  progress: FormControl;
  theme: FormControl;

  @ViewChild('usernameInput') usernameInput: MatInput;
  @ViewChild('emailInput') emailInput: MatInput;
  @ViewChild('passwordInput') passwordInput: MatInput;

  constructor(private headerService: HeaderService,
              public authService: AuthService,
              public themeService: ThemeService,
              private dataService: DataService,
              private matSnackBar: MatSnackBar,
              private formBuilder: FormBuilder
  ) {
    this.headerService.setPageTitle('Mein Profil');
    this.user = this.authService.user;
    this.initFormGroup();
  }

  ngOnInit(): void {
    this.initUserProgress();
  }

  initUserProgress(): void {
    if (this.dataService.dashboard === undefined) {
      this.dataService.getAllLessons().subscribe(
        (lessons) => {
          this.progressPercentage = Math.floor((this.user.progress.length / lessons.length) * 100);
          this.progress.setValue(this.progressPercentage + ' %');
        }, (error) => {
          console.log('error while GET all-lessons', error);
        }
      );
    } else {
      this.progressPercentage = Math.floor((this.user.progress.length / this.dataService.dashboard.allLessons.length) * 100);
      this.progress.setValue(this.progressPercentage + ' %');
    }
  }

  initFormGroup(): void {
    this.username = new FormControl({ value: this.user.name, disabled: true }, {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.email = new FormControl({ value: this.user.email, disabled: true }, {
      validators: [Validators.required, Validators.email],
      updateOn: 'submit'
    });
    this.verificationCode = new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit'
    });
    this.password = new FormControl({ value: this.user.password.substring(0, 8), disabled: true }, {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.confirmPassword = new FormControl('', {
      validators: [inputsMatch('password')],
      updateOn: 'submit'
    });
    this.role = new FormControl({ value: this.user.role, disabled: true }, {
      updateOn: 'submit'
    });
    this.progress = new FormControl({ value: 0, disabled: true }, {
      updateOn: 'submit'
    });
    this.theme = new FormControl({ value: this.themeService.getActiveTheme().name, disabled: true }, {
      updateOn: 'change'
    });
    this.formGroup = this.formBuilder.group({
      username: this.username,
      email: this.email,
      verificationCode: this.verificationCode,
      password: this.password,
      confirmPassword: this.confirmPassword,
      role: this.role,
      progress: this.progress,
      theme: this.theme
    });
  }

  resetProgress(): void {

  }

  markAllPostsAsRead(): void {

  }

  toggleChangeName(): void {
    if (this.username.disabled) {
      this.username.enable();
      this.usernameInput.focus();
    } else {
      this.username.setValue(this.user.name);
      this.username.disable();
    }
  }

  saveChangeName(): void {
    if (this.username.invalid) {
      return;
    }

    this.authService.editUser({ _id: this.authService.user._id, newName: this.username.value.toLowerCase() }).subscribe(
      (response) => {
        this.authService.user = response.user;
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Benutzername geändert'
        });
      }, (errorRes) => {
        this.formGroup.controls.username.setValue(this.authService.user.name);
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof errorRes === 'string' ? errorRes : errorRes.error.message
        });
      }
    ).add(() => {
      this.username.disable();
    });
  }

  toggleChangeEmail(): void {
    if (this.email.disabled) {
      this.email.enable();
      this.emailInput.focus();
    } else {
      this.email.setValue(this.user.email);
      this.email.disable();
    }
  }

  saveChangeEmail(): void {
    if (this.email.invalid) {
      return;
    }

    this.authService.editUser({ _id: this.authService.user._id, email: this.email.value.toLowerCase() }).subscribe(
      (response) => {
        this.authService.user = response.user;
        this.isChangingEmail = true;
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'E-Mail geändert'
        });
      }, (errorRes) => {
        this.formGroup.controls.email.setValue(this.authService.user.email);
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof errorRes === 'string' ? errorRes : errorRes.error.message
        });
      }
    ).add(() => {
      this.email.disable();
    });
  }

  toggleChangePassword(): void {
    if (this.password.disabled) {
      this.password.setValue('');
      this.password.enable();
      this.passwordInput.focus();
    } else {
      this.password.setValue(this.user.password.substring(0, 8));
      this.password.disable();
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

      this.authService.editUser({ _id: this.authService.user._id, password: this.confirmPassword.value }).subscribe(
        (response) => {
          this.authService.user = response.user;
          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Passwort geändert'
          });
        }, (errorRes) => {
          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Fehler: ' + typeof errorRes === 'string' ? errorRes : errorRes.error.message
          });
        }
      ).add(() => {
        this.password.disable();
        this.password.setValue(this.user.password.substring(0, 8));
        this.password.markAsUntouched();
        this.confirmPassword.markAsUntouched();
        this.isConfirmingPassword = undefined;
      });
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.theme.setValue(this.themeService.getActiveTheme().name);
  }

  saveChangeTheme(): void {
    this.authService.editUser({ _id: this.authService.user._id, theme: this.themeService.getActiveTheme().name }).subscribe(
      (response) => {
        this.authService.user = response.user;
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Standard-Theme geändert'
        });
      }, (errorRes) => {
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof errorRes === 'string' ? errorRes : errorRes.error.message
        });
      }
    );
  }

  confirmChangedEmail(): void {
    // TODO: check input token and update user
    this.authService.confirmRegistration(this.authService.user.email, this.verificationCode.value, this.email.value.toLowerCase())
      .subscribe(response => {
        this.isChangingEmail = undefined;
      });
  }
}
