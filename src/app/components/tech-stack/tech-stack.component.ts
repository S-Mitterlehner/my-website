import { Component, Input, OnInit } from '@angular/core';
import { TechStackCategory, TechStackItem } from '../../models/tech-stack-item.model';

export enum ItemSize {
  DEFAULT = 'default',
  SMALL = 'small'
} 

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.sass']
})
export class TechStackComponent {
  @Input() size: ItemSize | string = ItemSize.DEFAULT;
  @Input() items!: TechStackCategory[];

}
