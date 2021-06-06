import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { EditUser, User } from '../../models/user';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html'
})
export class MyProfileComponent implements OnInit {

  user: User;
  isEditable = false;
  progressPercentage: number;

  /* -- Form values -- */
  formGroup: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
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
    this.initializeForms();
  }

  ngOnInit(): void {
    this.initializeComponent();
  }

  /* -- Initial functions -- */
  initializeComponent(): void {
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

  initializeForms(): void {
    this.username = new FormControl({ value: this.user.name, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.email = new FormControl({ value: this.user.email, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.password = new FormControl({ value: this.user.password.substring(0, 8), disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.role = new FormControl({ value: this.user.role, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.progress = new FormControl({ value: 0, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.theme = new FormControl({ value: this.themeService.getActiveTheme().name, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'change'
    });
    this.formGroup = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      progress: this.progress,
      theme: this.theme
    });
  }

  /* -- Component functions -- */
  resetProgress(): void {

  }

  markAllPostsAsRead(): void {

  }

  markAsDirty(event): void {
    if (this.username.value !== this.authService.user.name) {
      this.formGroup.markAsTouched();
    } else {
      this.formGroup.markAsUntouched();
    }
  }

  /* -- Change username -- */
  toggleChangeName(event): void {
    event.preventDefault();

    if (this.username.disabled) {
      this.username.enable();
      this.usernameInput.focus();
    } else {
      this.username.setValue(this.user.name);
      this.username.disable();
    }
  }

  saveChangeName(event): void {
    const updatedUser = {
      name: this.authService.user.name,
      newName: this.username.value.toLowerCase(),
      email: this.authService.user.email
    };

    this.authService.editUser(updatedUser).subscribe(
      (response) => {
        this.authService.user = response.user;
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Benutzername geändert'
        });
      }, (error) => {
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof error === 'string' ? error : error.message
        });
      }
    ).add(() => {
      this.username.disable();
    });
  }

  /* -- Change email -- */
  toggleChangeEmail(event): void {
    event.preventDefault();

    if (this.email.disabled) {
      this.email.enable();
      this.emailInput.focus();
    } else {
      this.email.setValue(this.user.email);
      this.email.disable();
    }
  }

  saveChangeEmail(event): void {
    const updatedUser = {
      name: this.authService.user.name,
      email: this.email.value.toLowerCase(),
      password: this.authService.user.password
    };

    this.authService.editUser(updatedUser).subscribe(
      (response) => {
        this.authService.user = response.user;
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'E-Mail geändert'
        });
      }, (error) => {
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof error === 'string' ? error : error.message
        });
      }
    ).add(() => {
      this.email.disable();
    });
  }

  /* -- Change password -- */
  toggleChangePassword(event): void {
    event.preventDefault();

    if (this.password.disabled) {
      this.password.setValue('');
      this.password.enable();
      this.passwordInput.focus();
    } else {
      this.password.setValue(this.user.password.substring(0, 8));
      this.password.disable();
    }
  }

  saveChangePassword(event): void {
    const updatedUser = {
      name: this.authService.user.name,
      email: this.authService.user.email,
      password: this.password.value
    };

    this.authService.editUser(updatedUser).subscribe(
      (response) => {
        this.authService.user = response.user;
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Passwort geändert'
        });
      }, (error) => {
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof error === 'string' ? error : error.message
        });
      }
    ).add(() => {
      this.password.disable();
      this.password.setValue(this.user.password.substring(0, 8));
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.theme.setValue(this.themeService.getActiveTheme().name);
  }

  /* -- Change theme -- */
  saveChangeTheme(event): void {
    const updatedUser = {
      name: this.authService.user.name,
      theme: this.themeService.getActiveTheme().name
    } as EditUser;

    this.authService.editUser(updatedUser).subscribe(
      (response) => {
        this.authService.user = response.user;
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Standard-Theme geändert'
        });
      }, (error) => {
        console.log('Error while PATCH user/edit-user', error);
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + typeof error === 'string' ? error : error.message
        });
      }
    );
  }

}
