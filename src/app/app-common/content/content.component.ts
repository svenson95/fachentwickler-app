import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fe-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  subscription: Subscription = new Subscription();

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

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
