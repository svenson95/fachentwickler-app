import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { AuthUser } from '../../models/user';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('test', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('test', [Validators.required, Validators.minLength(4)]);
  formGroup: FormGroup;
  loading = false;

  constructor(private router: Router,
              private authService: AuthService,
              private headerService: HeaderService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder
  ) {
    this.headerService.setPageTitle('Login');
    this.formGroup = formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  login(event): void {
    this.loading = true;
    const username = this.formGroup.get('username').value.toLowerCase();
    const password = this.formGroup.get('password').value.toLowerCase();

    this.authService.login({username, password} as AuthUser).subscribe(
      (value) => {
        console.log('response login');
        console.log(value);
        this.router.navigateByUrl('/dashboard');
        this.loading = false;
      }, (error) => {
        console.log('ERROR login');
        console.log(error);
        this.loading = false;
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Login fehlgeschlagen'
        });
      }
    );
  }

}
