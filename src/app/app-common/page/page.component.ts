import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MediaQueryService } from '../../services/media-query.service';
import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fe-page',
  templateUrl: 'page.component.html',
})
export class PageComponent implements OnInit, OnDestroy, AfterViewInit {
  public isMobile: boolean;

  public isTiny: boolean;

  private subscription: Subscription = new Subscription();

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private sidenavService: SidenavService,
    public themeService: ThemeService,
    public mediaQueryService: MediaQueryService,
  ) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.mediaQueryService.isMobile$.subscribe((v) => {
        this.isMobile = v;
      }),
    );
    this.subscription.add(
      this.mediaQueryService.isTiny$.subscribe((v) => {
        this.isTiny = v;
      }),
    );
    this.subscription.add(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.elementRef.nativeElement
            .querySelector('.mat-sidenav-content')
            .scrollTo(0, 0);
          if (this.isMobile) this.sidenavService.close();
        }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  public onSideMenuToggled(isOpen: boolean): void {
    if (isOpen && this.isMobile) {
      this.renderer.addClass(document.body, 'scroll-locked');
    } else {
      this.renderer.removeClass(document.body, 'scroll-locked');
    }
  }
}
