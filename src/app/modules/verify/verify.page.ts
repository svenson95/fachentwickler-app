import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthService } from '@services/auth.service';
import { HeaderService } from '@services/header.service';

@Component({
  selector: 'fe-verify-page',
  templateUrl: './verify.page.html',
})
export class VerifyPage implements OnInit {
  @ViewChild('verificationCodeInput') public verificationCodeInput;

  public formGroup: FormGroup;

  public isSubmitLoading = false;

  public isResendLoading = false;

  private resendTimeout: boolean;

  public verificationSucceed: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService,
    private headerService: HeaderService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {
    this.headerService.setPageTitle('Verifizierung');
    this.formGroup = this.formBuilder.group({
      verificationCode: [null as number, { validators: [Validators.required], updateOn: 'submit' }],
    });
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.code) {
        this.formGroup.controls.verificationCode.setValue(params.code);

        this.verifyUser();
      }
    });
  }

  public verifyUser(event: Event = null): void {
    if (this.formGroup.invalid) return;

    const email = this.authService.isAuthenticated
      ? this.authService.user.email
      : this.route.snapshot.paramMap.get('email');
    const verificationCode = this.formGroup.get('verificationCode').value;

    this.isSubmitLoading = true;
    this.authService.verifyUser(email, verificationCode).subscribe(
      () => {
        this.isSubmitLoading = false;
        this.verificationSucceed = true;

        if (this.authService.isAuthenticated) {
          setTimeout(() => {
            this.router.navigateByUrl('/dashboard');
          }, 3000);
        }
      },
      (error) => {
        if (error.error.code === 'TokenNotFoundException') {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: 'Der Verifizierungscode ist ungültig, klicke auf nochmal senden um einen neuen Code zu erhalten.',
          });
        } else {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2500,
            data: `Fehler aufgetreten! ${error.error.message}`,
          });
        }

        this.isSubmitLoading = false;
        this.verificationCodeInput.nativeElement.blur();
      },
    );
  }

  public onFormChange(event): void {
    this.formGroup.controls.verificationCode.setErrors(null);
  }

  public resendVerificationMail(): void {
    if (this.resendTimeout !== undefined) {
      return;
    }

    this.isResendLoading = true;
    this.resendTimeout = true;
    this.authService.resendVerificationCode(this.authService.user.email).subscribe(
      () => {
        this.isResendLoading = false;
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Verifizierungscode erfolgreich versendet.',
        });

        setTimeout(() => {
          this.resendTimeout = undefined;
        }, 2500);
      },
      (error) => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: `Fehler auftreten. ${error.error.message}`,
        });

        this.isResendLoading = false;
        setTimeout(() => {
          this.resendTimeout = undefined;
        }, 2500);
      },
    );
  }
}
