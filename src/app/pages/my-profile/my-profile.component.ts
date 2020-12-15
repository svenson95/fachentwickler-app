import {Component, OnInit, ViewChild} from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { DataService } from '../../services/data/data.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {SnackbarComponent} from '../../app-common/snackbar/snackbar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  user: User;
  isEditable = false;
  progressPercentage: number;

  formGroup: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  role: FormControl;
  progress: FormControl;
  theme: FormControl;

  @ViewChild('nameInput') nameInput: MatInput;
  @ViewChild('emailInput') emailInput: MatInput;
  @ViewChild('passwordInput') passwordInput: MatInput;

  constructor(private headerService: HeaderService,
              private authService: AuthService,
              private dataService: DataService,
              private matSnackBar: MatSnackBar,
              private formBuilder: FormBuilder
  ) {
    this.headerService.setPageTitle('Mein Profil');
    this.user = this.authService.user;

    if (dataService.dashboard === undefined) {
      this.dataService.getAllLessons().subscribe(
        (lessons) => {
          this.progressPercentage = Math.floor((this.user.progress.length / lessons.length) * 100);
          this.progress.setValue(this.progressPercentage + ' %');
        }, (error) => {
          console.log('error while GET all-lessons', error);
        }
      );
    }

    this.username = new FormControl({ value: this.user.name, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.email = new FormControl({ value: this.user.email, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.password = new FormControl({ value: this.user.email, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.role = new FormControl({ value: this.user.role, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.progress = new FormControl({ value: '0', disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.theme = new FormControl({ value: this.user.theme, disabled: true }, {
      // validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.formGroup = formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      progress: this.progress,
      theme: this.theme
    });
  }

  ngOnInit(): void {
  }

  toggleChangeName(event): void {
    event.preventDefault();

    if (this.formGroup.controls['username'].disabled) {
      this.formGroup.controls['username'].enable();
      this.nameInput.focus();
    } else {
      const updatedUser = {
        "name": this.authService.user.name,
        "newName": this.formGroup.get('username').value.toLowerCase(),
        "email": this.authService.user.email,
        "password": this.authService.user.password
      };

      this.authService.editUser(updatedUser).subscribe(
        (response) => {
          this.authService.user = response.user;
          this.formGroup.controls['username'].disable();

          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Benutzername erfolgreich geändert'
          });
        }, (error) => {
          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Fehler: ' + error
          });
        }
      );
    }
  }

  toggleChangeEmail(event): void {
    event.preventDefault();

    if (this.formGroup.controls['email'].disabled) {
      this.formGroup.controls['email'].enable();
      this.emailInput.focus();
    } else {
      const updatedUser = {
        "name": this.authService.user.name,
        "email": this.formGroup.get('email').value.toLowerCase(),
        "password": this.authService.user.password
      };

      this.authService.editUser(updatedUser).subscribe(
        (response) => {
          this.authService.user = response.user;
          this.formGroup.controls['email'].disable();

          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'E-Mail erfolgreich geändert'
          });
        }, (error) => {
          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Fehler: ' + error
          });
        }
      );
    }
  }

  toggleChangePassword(event): void {
    event.preventDefault();

    if (this.formGroup.controls['password'].disabled) {
      this.formGroup.controls['password'].setValue('');
      this.formGroup.controls['password'].enable();
      this.passwordInput.focus();
    } else {
      const updatedUser = {
        "name": this.authService.user.name,
        "email": this.authService.user.email,
        "password": this.formGroup.get('password').value
      };

      this.authService.editUser(updatedUser).subscribe(
        (response) => {
          this.authService.user = response.user;
          this.formGroup.controls['password'].disable();
          this.formGroup.controls['password'].setValue(this.user.password.substring(0, 10));

          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Passwort erfolgreich geändert'
          });
        }, (error) => {
          this.matSnackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Fehler: ' + error.toString()
          });
        }
      );
    }
  }

  resetProgress(): void {

  }

  markAllPostsAsRead(): void {

  }

  markAsDirty(event): void {
    if (this.formGroup.controls['username'].value !== this.authService.user.name) {
      this.formGroup.markAsTouched();
    } else {
      this.formGroup.markAsUntouched();
    }
  }

}
