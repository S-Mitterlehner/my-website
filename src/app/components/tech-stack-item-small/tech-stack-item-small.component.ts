import { Component, input, Input, signal } from '@angular/core';
import { TechItem } from 'src/app/models/tech-stack-item.model';

@Component({
  selector: 'app-tech-stack-item-small',
  templateUrl: './tech-stack-item-small.component.html',
  styleUrls: ['./tech-stack-item-small.component.sass'],
})
export class TechStackItemSmallComponent {
  item = input.required<TechItem>();
  isTooltipVisible = signal<boolean>(false);
  tooltipActivated = signal<boolean>(false);

  setMouseOver(): void {
    this.tooltipActivated.set(true);
    this.isTooltipVisible.set(true);
  }

  resetMouseOver(): void {
    this.isTooltipVisible.set(false);
  }
}
