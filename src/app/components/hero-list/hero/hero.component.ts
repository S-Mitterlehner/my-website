import { Component, input } from '@angular/core';
import { HeroListItem } from 'src/app/models/hero-list-item.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})
export class HeroComponent {
  hero = input.required<HeroListItem>();
  orientation = input<string>('left');
}
