import { Component, OnDestroy } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main.content',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy {
  public isLoading: boolean;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router) {
    this.subscription.add(
      this.router.events.subscribe((event: RouterEvent) => {
        if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading = false;
        }
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
