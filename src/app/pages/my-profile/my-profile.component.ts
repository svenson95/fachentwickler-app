import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  user: User;

  constructor(private headerService: HeaderService,
              private authService: AuthService
  ) {
    this.headerService.setPageTitle('Mein Profil');
    this.user = this.authService.user;
  }

  ngOnInit(): void {
  }

}
