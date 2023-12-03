import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getAboutMeRoutes() {
    return [
      { route: 'tech-stack' },
      { route: 'experiences' },
      { route: 'education' },
    ];
  }
}
