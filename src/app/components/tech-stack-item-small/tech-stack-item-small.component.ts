import { Component, Input } from '@angular/core';
import { TechItem } from 'src/app/models/tech-stack-item.model';

@Component({
  selector: 'app-tech-stack-item-small',
  templateUrl: './tech-stack-item-small.component.html',
  styleUrls: ['./tech-stack-item-small.component.sass']
})
export class TechStackItemSmallComponent{
  @Input() item!: TechItem;
  isTooltipVisible = false;
  tooltipActivated = false;

  setMouseOver(): void {
    this.tooltipActivated = true;
    this.isTooltipVisible = true;
  }

  resetMouseOver(): void {
    this.isTooltipVisible = false;
  }
}
