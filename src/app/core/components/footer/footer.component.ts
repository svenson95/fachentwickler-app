import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FooterColumn } from '@models/footer';
import { UserService } from '@services/user.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public columns: FooterColumn[] = [
    {
      title: 'Anmelden',
      links: [
        { href: 'login', label: 'Login' },
        { href: 'register', label: 'Registrieren' },
        { href: 'forgot-password', label: 'Passwort vergessen' },
      ],
    },
    {
      title: 'Schülerbereich',
      links: [
        { href: 'dashboard', label: 'Dashboard' },
        { href: 'mein-profil', label: 'Mein Profil' },
        { href: 'pruefungssimulator', label: 'Prüfungssimulator' },
      ],
    },
    {
      title: 'Plattform',
      links: [
        { href: '', label: 'Start' },
        { href: 'about', label: 'About' },
        { href: 'feedback', label: 'Feedback' },
        { href: 'impressum', label: 'Impressum' },
      ],
    },
  ];

  constructor(public router: Router, public user: UserService) {}
}
