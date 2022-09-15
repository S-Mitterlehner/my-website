import { Component, Input, OnInit } from '@angular/core';
import { slideInFromLeft } from 'src/app/animations/slide-in';
import { HeroListItem } from 'src/app/models/hero-list-item.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass'],
  animations: [
    slideInFromLeft
  ]
})
export class HeroListComponent {
  @Input() items: HeroListItem[] = [];
}
