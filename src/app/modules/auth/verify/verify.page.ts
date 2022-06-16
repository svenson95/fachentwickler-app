import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthService } from '@services/auth.service';
import { HeaderService } from '@services/header.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-verify-page',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  @ViewChild('verificationCodeInput') public verificationCodeInput;

  public formGroup: FormGroup;

  public isSubmitLoading = false;

  public isResendLoading = false;

  public verificationSucceed = false;

  private resendTimeout = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private user: UserService,
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

  public onFormChange(): void {
    this.formGroup.controls.verificationCode.setErrors(null);
  }

  public verifyUser(): void {
    if (this.formGroup.invalid) return;

    const email = this.user.isAuthenticated ? this.user.data.email : this.route.snapshot.paramMap.get('email');
    const verificationCode = this.formGroup.get('verificationCode').value;

    this.isSubmitLoading = true;
    this.auth.verify(email, verificationCode).subscribe(
      (response) => {
        this.isSubmitLoading = false;

        if (response.success) {
          this.verificationSucceed = true;
          this.user.data = response.data.user;
          this.user.storeData();
        }

        if (this.user.isAuthenticated) {
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

  public resendVerificationMail(): void {
    if (this.resendTimeout !== false) {
      return;
    }

    this.isResendLoading = true;
    this.resendTimeout = true;

    this.auth.resendVerificationCode(this.user.data.email).subscribe(
      () => {
        this.isResendLoading = false;
        this.user.data.active = true;

        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Verifizierungscode erfolgreich versendet.',
        });

        setTimeout(() => {
          this.resendTimeout = false;
        }, 2500);
      },
      (error) => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: `Fehler auftreten. ${error.error.message}`,
        });

        this.isResendLoading = false;
        setTimeout(() => {
          this.resendTimeout = false;
        }, 2500);
      },
    );
  }
}
