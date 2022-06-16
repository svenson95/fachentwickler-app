import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthService } from '@services/auth.service';
import { HeaderService } from '@services/header.service';
import { UserService } from '@services/user.service';
import { inputsMatch } from '@validators/match.validator';

@Component({
  selector: 'fe-forgot-password-page',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  public emailForm: FormGroup;

  public passwordForm: FormGroup;

  public isEmailSent = false;

  public isSubmitLoading = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private user: UserService,
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.headerService.setPageTitle('Passwort vergessen');
    this.initFormGroups();
  }

  private initFormGroups(): void {
    this.emailForm = this.formBuilder.group({
      email: [null as string, { validators: [Validators.required, Validators.email] }],
    });

    this.passwordForm = this.formBuilder.group({
      verificationCode: [null as number, { validators: [Validators.required] }],
      password: [null as string, { validators: [Validators.required] }],
      confirmPassword: [null as string, { validators: [Validators.required, inputsMatch('password')] }],
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onFormChange(event: any): void {
    this.emailForm.controls.email.setErrors(null);
    this.passwordForm.controls.verificationCode.setErrors(null);
    this.passwordForm.controls.password.setErrors(null);
    this.passwordForm.controls.confirmPassword.setErrors(null);
  }

  public sendVerificationCode(): void {
    if (this.emailForm.invalid) {
      return;
    }

    const email = this.emailForm.get('email').value;
    this.isSubmitLoading = true;

    this.auth.forgotPassword(email).subscribe(
      (response) => {
        if (!response.success) {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Fehler! Benutzer ist bereits verfiziert',
          });
        } else {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Verifizierungscode versendet',
          });
        }

        this.isEmailSent = true;
      },
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler! Verifizierungscode konnte nicht gesendet werden',
        });
      },
      () => {
        this.isSubmitLoading = false;
      },
    );
  }

  public changeUserPassword(): void {
    if (this.passwordForm.invalid) return;

    const { verificationCode, confirmPassword } = this.passwordForm.value;
    this.user.changePassword(verificationCode, confirmPassword).subscribe(
      (response) => {
        if (response.success) {
          this.passwordForm.controls.verificationCode.setErrors({
            incorrect: true,
          });
        } else {
          this.router.navigate(['/login']);
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Passwort erfolgreich geändert',
          });
        }
      },
      (response: HttpErrorResponse) => {
        if (response.error.message.includes('Matching verification code not found')) {
          this.passwordForm.controls.verificationCode.setErrors({
            incorrect: true,
          });
        } else {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: `Fehler! ${response.statusText}`,
          });
        }
      },
      () => {
        this.isSubmitLoading = false;
      },
    );
  }
}
