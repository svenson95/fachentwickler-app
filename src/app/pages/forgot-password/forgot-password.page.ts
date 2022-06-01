import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderService } from '../../services/header.service';
import { inputsMatch } from '../../validators/match.validator';

@Component({
  selector: 'fe-forgot-password-page',
  templateUrl: './forgot-password.page.html',
})
export class ForgotPasswordPage {
  public emailForm: FormGroup;

  public passwordForm: FormGroup;

  public isEmailSent = false;

  public isSubmitLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.headerService.setPageTitle('Passwort vergessen');
    this.initFormGroups();
  }

  private initFormGroups(): void {
    this.emailForm = this.formBuilder.group({
      email: [
        null as string,
        { validators: [Validators.required, Validators.email] },
      ],
    });

    this.passwordForm = this.formBuilder.group({
      verificationCode: [null as number, { validators: [Validators.required] }],
      password: [null as string, { validators: [Validators.required] }],
      confirmPassword: [
        null as string,
        { validators: [Validators.required, inputsMatch('password')] },
      ],
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

    this.authService.forgotPassword(email).subscribe(
      (result) => {
        if (!result.success && result.code === 'UserVerifiedException') {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Fehler! Benutzer ist bereits verfiziert',
          });
        }
        if (!result.success && result.code === 'UserNotFoundException') {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Benutzer mit angegebener E-Mail Adresse nicht gefunden',
          });
        }

        this.isEmailSent = true;
      },
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Fehler! Verifizierungscode konnte nicht gesendet werden',
        });
      },
      () => {
        this.isSubmitLoading = false;
      },
    );
  }

  public changeUserPassword(): void {
    if (this.passwordForm.invalid) {
      return;
    }

    const { verificationCode, confirmPassword } = this.passwordForm.value;

    this.authService
      .changePassword(verificationCode, confirmPassword)
      .subscribe(
        () => {
          this.router.navigate(['/login']);
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Passwort erfolgreich geändert',
          });
        },
        (err) => {
          if (err.error.code === 'TokenNotFoundException') {
            this.passwordForm.controls.verificationCode.setErrors({
              incorrect: true,
            });
          }

          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Fehler! Benutzer Passwort konnte nicht geändert werden',
          });
        },
        () => {
          this.isSubmitLoading = false;
        },
      );
  }
}
