import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  @ViewChild('codeInput') codeInput;

  formGroup: FormGroup;
  verificationCode: FormControl;

  isSubmitLoading = false;
  isResendLoading = false;
  resendTimeout: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private headerService: HeaderService,
              private themeService: ThemeService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder
  ) {
    if (authService.isAuthenticated) {
      router.navigate(['dashboard']);
    }

    this.headerService.setPageTitle('Verifizierung');
    this.verificationCode = new FormControl(null as number, {
      validators: [Validators.required],
      updateOn: 'submit'
    });
    this.formGroup = formBuilder.group({
      verificationCode: this.verificationCode
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const {code} = params;

      if (code) {
        this.formGroup.controls.verificationCode.setValue(code);

        this.verifyUser();
      }
    });
  }

  verifyUser(event: Event = null): void {

    if (this.formGroup.invalid) {
      return;
    }

    this.isSubmitLoading = true;
    const verificationCode = this.formGroup.get('verificationCode').value;

    this.authService.confirmRegistration(this.authService.user.email, verificationCode).subscribe(
      (response) => {
        this.router.navigateByUrl('/dashboard');
        this.isSubmitLoading = false;
      }, (error) => {
        console.log(error);
        this.isSubmitLoading = false;
        this.codeInput.nativeElement.blur();
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Die eingegebenen Benutzerdaten sind falsch. Probiere es erneut.'
        });
      }
    );
  }

  onFormChange(event): void {
    this.verificationCode.setErrors(null);
  }

  usernameFieldKeyPress(event): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.codeInput.nativeElement.focus();
    }
  }

  resendVerificationMail(): void {
    if (this.resendTimeout !== undefined) {
      return;
    }

    this.isResendLoading = true;
    this.resendTimeout = true;
    this.authService.resendVerificationLink(this.authService.user.email).subscribe(
    (result) => {
      this.isResendLoading = false;
      setTimeout(() => {
        this.resendTimeout = undefined;
      }, 2500);
    }, (error) => {
      console.log(error);
      console.log(this.authService.token);
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 2500,
        data: 'Die eingegebenen Benutzerdaten sind falsch. Probiere es erneut.'
      });

      this.isResendLoading = false;
      setTimeout(() => {
        this.resendTimeout = undefined;
      }, 2500);
    });
  }
}
