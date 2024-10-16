import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _aboutMeRoutes = signal<{ route: string }[]>([
    { route: 'tech-stack' },
    { route: 'experiences' },
    { route: 'education' },
  ]);
  get aboutMeRoutes(): Signal<{ route: string }[]> {
    return this._aboutMeRoutes;
  }
}
