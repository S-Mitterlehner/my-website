import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { navigateAnimation } from './animations/navigation-animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    navigateAnimation
  ]
})
export class AppComponent implements OnInit{
  @ViewChild('content') content!: ElementRef;
  title = 'portfolio';  
  isFullPage = true;
  isOnTop = true;
  animationEnabled = false;

  constructor(private router: Router
            , private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data),
      map(data => data.hasOwnProperty('isFullPage') ? data['isFullPage'] : false),
    ).subscribe(d => {
      this.isFullPage = d ?? false;
      this.content.nativeElement.scrollTo(0, 0);
      window.scrollTo(0,0);
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
