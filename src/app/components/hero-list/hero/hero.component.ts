import { Component, Input, OnInit } from '@angular/core';
import { HeroListItem } from 'src/app/models/hero-list-item.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
  @Input() hero!: HeroListItem;
  @Input() orientation: string = 'left';

  constructor() { }

  ngOnInit(): void {
  }

}
