import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { AuthUser } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('test', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('test', [Validators.required, Validators.minLength(4)]);
  formGroup: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private headerService: HeaderService,
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
    const username = this.formGroup.get('username').value;
    const password = this.formGroup.get('password').value;

    this.authService.login({username, password} as AuthUser).subscribe((response) => {
      console.log('response authenticate');
      console.log(response);
      this.router.navigateByUrl('/dashboard');
    });
  }

}
