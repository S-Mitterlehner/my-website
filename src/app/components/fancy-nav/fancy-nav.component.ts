import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { slideInFromRight } from 'src/app/animations/slide-in';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-fancy-nav',
  templateUrl: './fancy-nav.component.html',
  styleUrls: ['./fancy-nav.component.sass'],
  animations: [slideInFromRight],
})
export class FancyNavComponent {
  showAboutMeSub = signal<boolean>(false);

  aboutMeRoutes = computed(() => {
    if (this.showAboutMeSub()) {
      return this.menuService.aboutMeRoutes();
    }

    return [];
  });

  constructor(
    private router: Router,
    private menuService: MenuService,
    private route: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
        map((data) =>
          data.hasOwnProperty('openAboutMe') ? data['openAboutMe'] : false
        )
      )
      .subscribe((d) => this.showAboutMeSub.set(d));
  }
}
