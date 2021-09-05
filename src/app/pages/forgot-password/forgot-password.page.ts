import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { inputsMatch } from '../../validators/match.validator';

@Component({
  selector: 'fe-forgot-password-page',
  templateUrl: './forgot-password.page.html'
})
export class ForgotPasswordPage implements OnInit {
  emailForm: FormGroup;
  passwordForm: FormGroup;
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
    this.initFormGroups();
  }

  initFormGroups(): void {
    this.emailForm = this.formBuilder.group({
      email: [null as string, { validators: [Validators.required, Validators.email] }]
    });

    this.passwordForm = this.formBuilder.group({
      verificationCode: [null as number, { validators: [Validators.required] }],
      password: [null as string, { validators: [Validators.required] }],
      confirmPassword: [null as string, { validators: [Validators.required, inputsMatch('password')] }]
    });
  }

  ngOnInit(): void {}

  onFormChange(event): void {
    this.emailForm.controls.email.setErrors(null);
    this.passwordForm.controls.verificationCode.setErrors(null);
    this.passwordForm.controls.password.setErrors(null);
    this.passwordForm.controls.confirmPassword.setErrors(null);
  }

  sendVerificationCode(): void {
    if (this.emailForm.invalid) {
      return;
    }

    const email = this.emailForm.get('email').value;
    this.isSubmitLoading = true;

    this.authService.forgotPassword(email).subscribe(
      (result) => {

        if (!result.success && result.code === 'UserVerifiedException') {
          return this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Fehler! Benutzer ist bereits verfiziert'
          });
        } else if (!result.success && result.code === 'UserNotFoundException') {
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
    if (this.passwordForm.invalid) {
      return;
    }

    const {verificationCode, confirmPassword} = this.passwordForm.value;

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
          return this.passwordForm.controls.verificationCode.setErrors({ incorrect: true });
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
