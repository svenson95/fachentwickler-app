import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@services/user.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public router: Router, public user: UserService) {}
}
