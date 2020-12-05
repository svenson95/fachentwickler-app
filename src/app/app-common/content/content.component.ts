import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { slideInAnimation } from '../../animations/slideIn.animation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  // animations: [
  //   slideInAnimation
  // ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
