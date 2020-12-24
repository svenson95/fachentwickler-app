import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
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
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.viewportScroller.scrollToPosition([0, 0]));
  }
}
