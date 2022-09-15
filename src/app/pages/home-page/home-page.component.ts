import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { subNavigateAnimation } from 'src/app/animations/navigation-animation';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  animations: [
    subNavigateAnimation
  ]
})
export class HomePageComponent {

  prepareAnimation(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
