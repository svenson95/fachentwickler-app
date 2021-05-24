import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { RegisterUser, UserRole } from '../../models/user';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {

  formGroup: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;

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
              private formBuilder: FormBuilder,
              private headerService: HeaderService,
              private authService: AuthService,
              private snackBar: MatSnackBar,
              private themeService: ThemeService
  ) {
    this.headerService.setPageTitle('Registrieren');
    this.name = new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), this.NameAlreadyTaken],
      updateOn: 'submit'
    });
    this.email = new FormControl('', {
      validators: [Validators.required, Validators.email, this.EmailAlreadyTaken],
      updateOn: 'submit'
    });
    this.password = new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit'
    });
    this.formGroup = formBuilder.group({
      name: this.name,
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  register(event): void {

    if (this.formGroup.invalid) {
      return;
    }

    const name = this.name.value.toLowerCase();
    const email = this.email.value.toLowerCase();
    const password = this.password.value.toLowerCase();
    const user = {
      name, email, password,
      theme: this.themeService.getActiveTheme().name,
      role: UserRole.USER
    } as RegisterUser;

    this.authService.register(user).subscribe(
      (value) => {
        console.log('response register');
        console.log(value);
        this.router.navigateByUrl('/dashboard');
      }, (error) => {
        console.log('ERROR register');
        console.log(error);

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
      this.formGroup.setErrors({ alreadyTaken: true });
      this.formGroup.markAsDirty({onlySelf: false});
      return 'Der Benutzername ist bereits vergeben';
    } else if (response.error.message === 'E-Mail is already taken') {
      this.emailAlreadyTaken = true;
      this.formGroup.setErrors({ alreadyTaken: true });
      this.formGroup.markAsDirty({onlySelf: false});
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
