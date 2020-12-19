import { Component } from '@angular/core';
import { registerLocaleData, ViewportScroller } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { NavigationEnd , Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fiappy-app';

  constructor(private router: Router,
              private viewportScroller: ViewportScroller
  ) {
    registerLocaleData(localeDe);
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.viewportScroller.scrollToPosition([0, 0]));
  }
}
