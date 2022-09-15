import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getAboutMeRoutes() {
    return [
      {text: 'Tech Stack', route: 'tech-stack'},
      {text: 'Experiences', route: 'experiences'},
      {text: 'Education', route: 'education'}
    ]
  }
  
}
