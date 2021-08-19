import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fe-login',
  templateUrl: './verify.component.html'
})
export class VerifyComponent implements OnInit {
  @ViewChild('verificationCodeInput') verificationCodeInput;

  formGroup: FormGroup;
  isSubmitLoading = false;
  isResendLoading = false;
  resendTimeout: boolean;
  verificationSucceed: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public authService: AuthService,
              private headerService: HeaderService,
              private themeService: ThemeService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder
  ) {
    this.headerService.setPageTitle('Verifizierung');
    this.formGroup = formBuilder.group({
      verificationCode: [null as number, { validators: [Validators.required], updateOn: 'submit' }]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        this.formGroup.controls.verificationCode.setValue(params.code);

        this.verifyUser();
      }
    });
  }

  verifyUser(event: Event = null): void {
    if (this.formGroup.invalid) return;

    const email = this.authService.isAuthenticated ? this.authService.user.email : this.route.snapshot.paramMap.get('email');
    const verificationCode = this.formGroup.get('verificationCode').value;

    this.isSubmitLoading = true;
    this.authService.verifyUser(email, verificationCode).subscribe(
      (response) => {
        this.isSubmitLoading = false;
        this.verificationSucceed = true;

        if (this.authService.isAuthenticated) {
          setTimeout(() => {
            this.router.navigateByUrl('/dashboard');
          }, 3000);
        }
      }, (error) => {
        if (error.error.code === 'TokenNotFoundException') {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Der Verifizierungscode ist ungültig, klicke auf nochmal senden um einen neuen Code zu erhalten.'
          });
        } else {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Fehler aufgetreten! ' + error.error.message
          });
        }

        this.isSubmitLoading = false;
        this.verificationCodeInput.nativeElement.blur();
      }
    );
  }

  onFormChange(event): void {
    this.formGroup.controls['verification-code'].setErrors(null);
  }

  usernameFieldKeyPress(event): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.verificationCodeInput.nativeElement.focus();
    }
  }

  resendVerificationMail(): void {
    if (this.resendTimeout !== undefined) {
      return;
    }

    this.isResendLoading = true;
    this.resendTimeout = true;
    this.authService.resendVerificationCode(this.authService.user.email).subscribe(
    (result) => {
      this.isResendLoading = false;
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 2500,
        data: 'Verifizierungscode erfolgreich versendet.'
      });

      setTimeout(() => {
        this.resendTimeout = undefined;
      }, 2500);
    }, (error) => {
      console.log(error);
      console.log(this.authService.token);
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 2500,
        data: 'Fehler auftreten. ' + error.error.message
      });

      this.isResendLoading = false;
      setTimeout(() => {
        this.resendTimeout = undefined;
      }, 2500);
    });
  }
}
