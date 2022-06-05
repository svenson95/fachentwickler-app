import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fe-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnDestroy {
  public isLoading: boolean;

  private subscription: Subscription = new Subscription();

  constructor(public router: Router) {
    const routerLoadingSubscription = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
    this.subscription.add(routerLoadingSubscription);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
