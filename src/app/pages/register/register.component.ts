import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from '../../services/header.service';
import { RegisterUser } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('test', [Validators.required, Validators.minLength(4)]);
  email = new FormControl('test', [Validators.required, Validators.email]);
  password = new FormControl('test', [Validators.required, Validators.minLength(4)]);
  formGroup: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private headerService: HeaderService,
              private authService: AuthService
  ) {
    this.headerService.setPageTitle('Registrieren');
    this.formGroup = formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  register(event): void {
    const username = this.formGroup.get('username').value.toLowerCase();
    const email = this.formGroup.get('email').value.toLowerCase();
    const password = this.formGroup.get('password').value.toLowerCase();

    this.authService.register({username, email, password} as RegisterUser).subscribe(
      (value) => {
        console.log('response register');
        console.log(value);
        this.router.navigateByUrl('/dashboard');
      }, (error) => {
        console.log('ERROR register');
        console.log(error);
      }
    );
  }

}
