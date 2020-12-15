import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd , Router} from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fiappy-app';

  constructor(private router: Router,
              private viewportScroller: ViewportScroller,
              private authService: AuthService
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.viewportScroller.scrollToPosition([0, 0]));

    this.authService.authenticated().subscribe(
      (value) => {
        console.log('response authenticated', value);
      }, (error) => {
        console.log('ERROR authenticated', error);
      }
    );
  }
}
