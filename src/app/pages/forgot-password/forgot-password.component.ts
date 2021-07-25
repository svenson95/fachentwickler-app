import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import {inputsMatch} from '../../validators/match.validator';

@Component({
  selector: 'fe-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('emailInput') emailInput;
  @ViewChild('verificationCodeInput') verificationCodeInput;

  emailFormGroup: FormGroup;
  email: FormControl;

  passwordFormGroup: FormGroup;
  verificationCode: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  isEmailSent = false;
  isSubmitLoading = false;
  resendTimeout: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private headerService: HeaderService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar
  ) {
    this.headerService.setPageTitle('Passwort vergessen');
    if (authService.isAuthenticated) {
      router.navigate(['dashboard']);
    }

    this.initFormGroups();
  }

  initFormGroups(): void {
    this.email = new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'submit'
    });

    this.emailFormGroup = this.formBuilder.group({
      email: this.email
    });

    this.verificationCode = new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit'
    });

    this.password = new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit'
    });

    this.confirmPassword = new FormControl('', {
      validators: [Validators.required, inputsMatch('password')],
      updateOn: 'submit'
    });

    this.passwordFormGroup = this.formBuilder.group({
      verificationCode: this.verificationCode,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  ngOnInit(): void {}

  onFormChange(event): void {
    this.email.setErrors(null);
    this.verificationCode.setErrors(null);
    this.password.setErrors(null);
    this.confirmPassword.setErrors(null);
  }

  sendVerificationCode(): void {
    if (this.emailFormGroup.invalid) {
      return;
    }

    const email = this.emailFormGroup.get('email').value;
    this.isSubmitLoading = true;

    this.authService.forgotPassword(email).subscribe(
      (result) => {

        if (!result.success && result.code === 'UserVerifiedException') {
          return this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Fehler! Verifizierungscode konnte nicht gesendet werden'
          });
        } else if (!result.response) {
          return this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Benutzer mit angegebener E-Mail Adresse nicht gefunden'
          });
        }

        this.isEmailSent = true;
      },
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Fehler! Verifizierungscode konnte nicht gesendet werden'
        });
      },
      () => {
        this.isSubmitLoading = false;
      }
    );
  }

  changeUserPassword(): void {
    if (this.passwordFormGroup.invalid) {
      return;
    }

    const {verificationCode, confirmPassword} = this.passwordFormGroup.value;

    this.authService.changePassword(verificationCode, confirmPassword).subscribe(
      (result) => {
        this.router.navigate(['/login']);
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Passwort erfolgreich geändert'
        });
      },
      (response) => {
        if (response.error.code === 'TokenNotFoundException') {
          return this.verificationCode.setErrors({ incorrect: true });
        }

        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Fehler! Benutzer Passwort konnte nicht geändert werden'
        });
      },
      () => {
        this.isSubmitLoading = false;
      }
    );
  }

}
