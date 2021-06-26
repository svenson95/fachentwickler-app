import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd , Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'fachentwickler-app';

  constructor(private router: Router,
              private viewportScroller: ViewportScroller
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.viewportScroller.scrollToPosition([0, 0]));
  }
}
